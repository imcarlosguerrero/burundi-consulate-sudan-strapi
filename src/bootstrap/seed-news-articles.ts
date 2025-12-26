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
      title: "Consulate Holiday Schedule 2026",
      slug: "consulate-holiday-schedule-2026",
      excerpt: "The Consulate will be closed on the following dates for national holidays in 2026.",
      content: "<p>The Consulate of Burundi announces its holiday schedule for 2026. We will be closed on January 1 (New Year), July 1 (Independence Day), and December 25 (Christmas).</p>",
      category: "announcement",
      isFeatured: true,
      author: "Consulate Administration"
    },
    ar: {
      title: "جدول العطلات الرسمية للقنصلية 2026",
      excerpt: "ستكون القنصلية مغلقة في التواريخ التالية للعطلات الوطنية في عام 2026.",
      content: "<p>تعلن قنصلية بوروندي عن جدول العطلات الرسمية لعام 2026. سنكون مغلقين في 1 يناير (رأس السنة)، 1 يوليو (عيد الاستقلال)، و25 ديسمبر (عيد الميلاد).</p>",
      author: "إدارة القنصلية"
    }
  },
  {
    en: {
      title: "New Passport Application Procedures",
      slug: "new-passport-application-procedures",
      excerpt: "Updated guidelines for passport applications are now in effect.",
      content: "<p>The Consulate has updated passport application procedures. Please bring your national ID, birth certificate, and 4 passport photos. Processing takes 4-6 weeks.</p>",
      category: "consular-services",
      isFeatured: false,
      author: "Consular Services"
    },
    ar: {
      title: "إجراءات جديدة لطلبات جوازات السفر",
      excerpt: "الإرشادات المحدثة لطلبات جوازات السفر سارية المفعول الآن.",
      content: "<p>قامت القنصلية بتحديث إجراءات طلب جواز السفر. يرجى إحضار بطاقة الهوية الوطنية وشهادة الميلاد و4 صور. تستغرق المعالجة 4-6 أسابيع.</p>",
      author: "الخدمات القنصلية"
    }
  },
  {
    en: {
      title: "Burundi Independence Day Celebration",
      slug: "burundi-independence-day-celebration",
      excerpt: "Join us in celebrating Burundi's Independence Day on July 1, 2026.",
      content: "<p>The Consulate invites all Burundian nationals to celebrate Independence Day. The event will feature traditional drums, cultural dances, and Burundian cuisine.</p>",
      category: "event",
      isFeatured: true,
      author: "Events Team"
    },
    ar: {
      title: "احتفال عيد استقلال بوروندي",
      excerpt: "انضموا إلينا للاحتفال بعيد استقلال بوروندي في 1 يوليو 2026.",
      content: "<p>تدعو القنصلية جميع الرعايا البورونديين للاحتفال بعيد الاستقلال. سيتضمن الحدث الطبول التقليدية والرقصات الثقافية والمأكولات البوروندية.</p>",
      author: "فريق الفعاليات"
    }
  }
];

export async function seedNewsArticles(strapi: Core.Strapi): Promise<void> {
  const existingArticles = await strapi.documents('api::news-article.news-article').findMany({
    locale: 'en',
    limit: 1
  });

  if (existingArticles.length > 0) {
    strapi.log.info('🌱 News articles already seeded, skipping...');
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
