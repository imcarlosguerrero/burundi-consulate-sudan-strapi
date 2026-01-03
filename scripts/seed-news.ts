/**
 * Seed script for news articles
 * Run with: STRAPI_API_TOKEN=your_token npm run seed:news
 */

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const API_TOKEN = process.env.STRAPI_API_TOKEN || '';

if (!API_TOKEN) {
  console.error('❌ Please set STRAPI_API_TOKEN environment variable');
  process.exit(1);
}

const newsData = [
  {
    en: {
      title: "Honorary Consulate Holiday Schedule 2026",
      slug: "honorary-consulate-holiday-schedule-2026",
      excerpt: "The Honorary Consulate will be closed on the following dates for national holidays in 2026.",
      content: "<p>The Honorary Consulate of Burundi announces its holiday schedule for 2026. We will be closed on January 1 (New Year), July 1 (Independence Day), and December 25 (Christmas).</p>",
      category: "announcement",
      isFeatured: true,
      author: "Honorary Consulate Administration",
      publishedAt: "2025-12-15T10:00:00.000Z"
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
      content: "<p>تعلن القنصلية الفخرية لبوروندي عن جدول العطلات الرسمية لعام 2026. سنكون مغلقين في 1 يناير (رأس السنة)، 1 يوليو (عيد الاستقلال)، إ25 ديسمبر (عيد الميلاد).</p>",
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
      author: "Honorary Consular Services",
      publishedAt: "2025-12-01T09:00:00.000Z"
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
      author: "Events Team",
      publishedAt: "2025-11-20T08:00:00.000Z"
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

interface ArticleData {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  category?: string;
  isFeatured?: boolean;
  author: string;
  publishedAt?: string;
}

interface StrapiListResponse {
  data: { documentId: string }[];
}

interface StrapiCreateResponse {
  data: { documentId: string };
}

async function deleteAllArticles(): Promise<void> {
  console.log('🗑️  Deleting existing articles...');
  
  // Fetch English articles
  const res = await fetch(`${STRAPI_URL}/api/news-articles?locale=en&pagination[pageSize]=100`, {
    headers: { 'Authorization': `Bearer ${API_TOKEN}` }
  });
  
  if (!res.ok) {
    console.log('   No articles to delete or error fetching');
    return;
  }
  
  const { data } = await res.json() as StrapiListResponse;
  
  if (!data || data.length === 0) {
    console.log('   No existing articles');
    return;
  }
  
  // Delete each by documentId
  for (const article of data) {
    const delRes = await fetch(`${STRAPI_URL}/api/news-articles/${article.documentId}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${API_TOKEN}` }
    });
    if (delRes.ok) {
      console.log(`   Deleted: ${article.documentId}`);
    } else {
      console.log(`   Failed to delete: ${article.documentId}`);
    }
  }
  
  // Wait a bit to ensure deletion is processed
  await new Promise(resolve => setTimeout(resolve, 500));
}

async function createArticle(enData: ArticleData): Promise<string> {
  const res = await fetch(`${STRAPI_URL}/api/news-articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({ data: { ...enData, locale: 'en' } })
  });
  
  if (!res.ok) {
    const err = await res.json();
    throw new Error(JSON.stringify(err));
  }
  
  const { data } = await res.json() as StrapiCreateResponse;
  return data.documentId;
}

async function createArabicVersion(documentId: string, arData: ArticleData, slug: string): Promise<void> {
  // In Strapi 5, we need to PUT to update with a new locale
  const res = await fetch(`${STRAPI_URL}/api/news-articles/${documentId}?locale=ar`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({ 
      data: {
        ...arData,
        slug, // Keep same slug
        locale: 'ar'
      }
    })
  });
  
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Arabic creation failed: ${text}`);
  }
}

async function createFrenchVersion(documentId: string, frData: ArticleData, slug: string): Promise<void> {
  const res = await fetch(`${STRAPI_URL}/api/news-articles/${documentId}?locale=fr`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({ 
      data: {
        ...frData,
        slug,
        locale: 'fr'
      }
    })
  });
  
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`French creation failed: ${text}`);
  }
}

async function seed(): Promise<void> {
  console.log('🌱 Seeding news articles...\n');
  
  try {
    await deleteAllArticles();
    console.log('');
    
    for (const news of newsData) {
      console.log(`📝 Creating: ${news.en.title}`);
      const documentId = await createArticle(news.en);
      console.log(`   ✓ English created`);
      
      await createFrenchVersion(documentId, news.fr, news.en.slug);
      console.log(`   ✓ French created`);
      
      await createArabicVersion(documentId, news.ar, news.en.slug);
      console.log(`   ✓ Arabic created`);
    }
    
    console.log('\n✅ Done! Created 3 articles with English, French, and Arabic versions.');
  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  }
}

seed();

export {};
