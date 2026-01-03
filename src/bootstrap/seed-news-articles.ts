/**
 * Seed data for news articles
 * This runs during Strapi bootstrap if no articles exist
 */

import type { Core } from '@strapi/strapi';

type NewsCategory = 'announcement' | 'consular-services' | 'event' | 'press-release' | 'general';

interface ArticleSeedData {
  en: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: NewsCategory;
    isFeatured: boolean;
    author: string;
  };
  fr: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
  };
  ar: {
    title: string;
    excerpt: string;
    content: string;
    author: string;
  };
}

const newsData: ArticleSeedData[] = [
  {
    en: {
      title: "Honorary Consulate Holiday Schedule 2026",
      slug: "honorary-consulate-holiday-schedule-2026",
      excerpt: "The Honorary Consulate will be closed on the following dates for national holidays in 2026.",
      content: "<p>The Honorary Consulate of Burundi announces its holiday schedule for 2026. We will be closed on January 1 (New Year), July 1 (Independence Day), and December 25 (Christmas).</p>",
      category: "announcement",
      isFeatured: true,
      author: "Honorary Consulate Administration"
    },
    fr: {
      title: "Calendrier des jours fériés du Consulat Honoraire 2026",
      excerpt: "Le Consulat Honoraire sera fermé aux dates suivantes pour les jours fériés nationaux en 2026.",
      content: "<p>Le Consulat Honoraire du Burundi annonce son calendrier des jours fériés pour 2026. Nous serons fermés le 1er janvier (Nouvel An), le 1er juillet (Fête de l'Indépendance) et le 25 décembre (Noël).</p>",
      author: "Administration du Consulat Honoraire"
    },
    ar: {
      title: "جدول العطلات الرسمية للقنصلية الفخرية 2026",
      excerpt: "ستكون القنصلية الفخرية مغلقة في التواريخ التالية للعطلات الوطنية في عام 2026.",
      content: "<p>تعلن القنصلية الفخرية لبوروندي عن جدول العطلات الرسمية لعام 2026. سنكون مغلقين في 1 يناير (رأس السنة)، 1 يوليو (عيد الاستقلال)، و25 ديسمبر (عيد الميلاد).</p>",
      author: "إدارة القنصلية الفخرية"
    }
  },
  {
    en: {
      title: "New Passport Application Procedures",
      slug: "new-passport-application-procedures",
      excerpt: "Updated guidelines for passport applications are now in effect.",
      content: "<p>The Honorary Consulate has updated passport application procedures. Please bring your national ID, birth certificate, and 4 passport photos. Processing takes 4-6 weeks.</p>",
      category: "consular-services",
      isFeatured: false,
      author: "Honorary Consular Services"
    },
    fr: {
      title: "Nouvelles procédures de demande de passeport",
      excerpt: "Les nouvelles directives pour les demandes de passeport sont maintenant en vigueur.",
      content: "<p>Le Consulat Honoraire a mis à jour les procédures de demande de passeport. Veuillez apporter votre carte d'identité nationale, votre acte de naissance et 4 photos d'identité. Le traitement prend 4 à 6 semaines.</p>",
      author: "Services consulaires honoraires"
    },
    ar: {
      title: "إجراءات جديدة لطلبات جوازات السفر",
      excerpt: "الإرشادات المحدثة لطلبات جوازات السفر سارية المفعول الآن.",
      content: "<p>قامت القنصلية الفخرية بتحديث إجراءات طلب جواز السفر. يرجى إحضار بطاقة الهوية الوطنية وشهادة الميلاد و4 صور. تستغرق المعالجة 4-6 أسابيع.</p>",
      author: "الخدمات القنصلية الفخرية"
    }
  },
  {
    en: {
      title: "Burundi Independence Day Celebration",
      slug: "burundi-independence-day-celebration",
      excerpt: "Join us in celebrating Burundi's Independence Day on July 1, 2026.",
      content: "<p>The Honorary Consulate invites all Burundian nationals to celebrate Independence Day. The event will feature traditional drums, cultural dances, and Burundian cuisine.</p>",
      category: "event",
      isFeatured: true,
      author: "Events Team"
    },
    fr: {
      title: "Célébration de la Fête de l'Indépendance du Burundi",
      excerpt: "Rejoignez-nous pour célébrer la Fête de l'Indépendance du Burundi le 1er juillet 2026.",
      content: "<p>Le Consulat Honoraire invite tous les ressortissants burundais à célébrer la Fête de l'Indépendance. L'événement comprendra des tambours traditionnels, des danses culturelles et une cuisine burundaise.</p>",
      author: "Équipe des événements"
    },
    ar: {
      title: "احتفال عيد استقلال بوروندي",
      excerpt: "انضموا إلينا للاحتفال بعيد استقلال بوروندي في 1 يوليو 2026.",
      content: "<p>تدعو القنصلية الفخرية جميع الرعايا البورونديين للاحتفال بعيد الاستقلال. سيتضمن الحدث الطبول التقليدية والرقصات الثقافية والمأكولات البوروندية.</p>",
      author: "فريق الفعاليات"
    }
  }
];

export async function seedNewsArticles(strapi: Core.Strapi): Promise<void> {
  const existingArticles = await strapi.documents('api::news-article.news-article').findMany({
    locale: 'en',
    limit: 100
  });

  if (existingArticles.length > 0) {
    // Content exists - check if French translations are missing
    strapi.log.info('🌱 News articles exist, checking for missing French translations...');
    
    for (const existing of existingArticles) {
      // Find matching seed data by slug
      const seedData = newsData.find(a => a.en.slug === existing.slug);
      if (!seedData) continue;
      
      // Check if French version exists
      const frenchVersion = await strapi.documents('api::news-article.news-article').findMany({
        locale: 'fr',
        filters: { documentId: existing.documentId },
        limit: 1
      });
      
      if (frenchVersion.length === 0) {
        try {
          await strapi.documents('api::news-article.news-article').update({
            documentId: existing.documentId,
            locale: 'fr',
            data: {
              title: seedData.fr.title,
              slug: seedData.en.slug,
              excerpt: seedData.fr.excerpt,
              content: seedData.fr.content,
              author: seedData.fr.author,
              category: seedData.en.category,
              isFeatured: seedData.en.isFeatured
            },
            status: 'published'
          });
          strapi.log.info(`   ✓ Added French: ${seedData.fr.title}`);
        } catch (error) {
          strapi.log.error(`   ✗ Failed to add French for: ${existing.title}`, error);
        }
      }
    }
    
    strapi.log.info('✅ French translations check complete!');
    return;
  }

  strapi.log.info('🌱 Seeding news articles...');

  for (const article of newsData) {
    try {
      // Create English version
      const created = await strapi.documents('api::news-article.news-article').create({
        data: {
          title: article.en.title,
          slug: article.en.slug,
          excerpt: article.en.excerpt,
          content: article.en.content,
          category: article.en.category,
          isFeatured: article.en.isFeatured,
          author: article.en.author,
          locale: 'en'
        },
        status: 'published'
      });

      strapi.log.info(`   ✓ Created (EN): ${article.en.title}`);

      // Create French version
      await strapi.documents('api::news-article.news-article').update({
        documentId: created.documentId,
        locale: 'fr',
        data: {
          title: article.fr.title,
          slug: article.en.slug,
          excerpt: article.fr.excerpt,
          content: article.fr.content,
          author: article.fr.author,
          category: article.en.category,
          isFeatured: article.en.isFeatured
        },
        status: 'published'
      });

      strapi.log.info(`   ✓ Created (FR): ${article.fr.title}`);

      // Create Arabic version
      await strapi.documents('api::news-article.news-article').update({
        documentId: created.documentId,
        locale: 'ar',
        data: {
          title: article.ar.title,
          slug: article.en.slug,
          excerpt: article.ar.excerpt,
          content: article.ar.content,
          author: article.ar.author,
          category: article.en.category,
          isFeatured: article.en.isFeatured
        },
        status: 'published'
      });

      strapi.log.info(`   ✓ Created (AR): ${article.ar.title}`);
    } catch (error) {
      strapi.log.error(`   ✗ Failed to create: ${article.en.title}`, error);
    }
  }

  strapi.log.info('✅ News articles seeding complete!');
}
