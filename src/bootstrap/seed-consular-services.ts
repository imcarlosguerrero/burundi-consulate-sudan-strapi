/**
 * Seed data for consular services
 * This runs during Strapi bootstrap if no services exist
 */

import type { Core } from '@strapi/strapi';

interface ServiceSeedData {
  en: {
    title: string;
    slug: string;
    description: string;
    content: string;
    icon: string;
    order: number;
    isActive: boolean;
  };
  fr: {
    title: string;
    description: string;
    content: string;
  };
  ar: {
    title: string;
    description: string;
    content: string;
  };
}

const consularServicesData: ServiceSeedData[] = [
  {
    en: {
      title: "Passport Services",
      slug: "passport-services",
      description: "New passport applications, renewals, and emergency travel documents for Burundian citizens.",
      content: `<h2>Passport Services</h2>
<p>The Consulate of Burundi in Sudan provides comprehensive passport services for Burundian citizens residing in Sudan.</p>

<h3>Services Offered</h3>
<ul>
  <li>New passport applications</li>
  <li>Passport renewals</li>
  <li>Emergency travel documents</li>
  <li>Passport replacement (lost or stolen)</li>
</ul>

<h3>Required Documents</h3>
<ul>
  <li>Completed passport application form</li>
  <li>Current valid national ID card</li>
  <li>Birth certificate (original and copy)</li>
  <li>4 recent passport-size photographs (white background)</li>
  <li>Previous passport (for renewals)</li>
  <li>Police report (for lost/stolen passports)</li>
</ul>

<h3>Processing Times</h3>
<ul>
  <li>Standard processing: 4-6 weeks</li>
  <li>Emergency travel document: 3-5 business days</li>
</ul>

<h3>Fees</h3>
<ul>
  <li>New/Renewal passport: $100 USD</li>
  <li>Emergency travel document: $50 USD</li>
  <li>Replacement (lost/stolen): $120 USD</li>
</ul>

<p>Please schedule an appointment before visiting the consulate.</p>`,
      icon: "passport",
      order: 1,
      isActive: true
    },
    fr: {
      title: "Services de passeport",
      description: "Nouvelles demandes de passeport, renouvellements et documents de voyage d'urgence pour les citoyens burundais.",
      content: `<h2>Aperçu</h2>
<p>Le Consulat offre des services complets de passeport aux citoyens burundais résidant au Soudan. Nos services comprennent les nouvelles demandes de passeport, les renouvellements et les documents de voyage d'urgence.</p>

<h2>Services offerts</h2>
<ul>
<li><strong>Nouvelles demandes de passeport</strong> - Pour les demandeurs première fois ou ceux qui n'ont jamais détenu de passeport burundais</li>
<li><strong>Renouvellement de passeport</strong> - Pour les passeports expirés ou bientôt expirés</li>
<li><strong>Documents de voyage d'urgence</strong> - Pour les besoins de voyage urgents</li>
<li><strong>Passeports pour enfants</strong> - Pour les mineurs nés de parents burundais</li>
</ul>

<h2>Documents requis</h2>
<ul>
<li>Formulaire de demande rempli</li>
<li>Passeport actuel (pour les renouvellements)</li>
<li>Acte de naissance ou preuve de citoyenneté</li>
<li>Deux photos d'identité récentes</li>
<li>Preuve de résidence au Soudan</li>
<li>Paiement des frais applicables</li>
</ul>

<h2>Délai de traitement</h2>
<p>Traitement standard : 4-6 semaines<br/>Traitement d'urgence : 1-2 semaines (frais supplémentaires)</p>`
    },
    ar: {
      title: "خدمات جوازات السفر",
      description: "طلبات جوازات السفر الجديدة والتجديد ووثائق السفر الطارئة للمواطنين البورونديين.",
      content: `<h2>خدمات جوازات السفر</h2>
<p>تقدم قنصلية بوروندي في السودان خدمات شاملة لجوازات السفر للمواطنين البورونديين المقيمين في السودان.</p>

<h3>الخدمات المقدمة</h3>
<ul>
  <li>طلبات جوازات السفر الجديدة</li>
  <li>تجديد جوازات السفر</li>
  <li>وثائق السفر الطارئة</li>
  <li>استبدال جواز السفر (المفقود أو المسروق)</li>
</ul>

<h3>المستندات المطلوبة</h3>
<ul>
  <li>نموذج طلب جواز السفر مكتمل</li>
  <li>بطاقة الهوية الوطنية السارية</li>
  <li>شهادة الميلاد (الأصل والنسخة)</li>
  <li>4 صور حديثة بحجم جواز السفر (خلفية بيضاء)</li>
  <li>جواز السفر السابق (للتجديد)</li>
  <li>تقرير الشرطة (لجوازات السفر المفقودة/المسروقة)</li>
</ul>

<h3>أوقات المعالجة</h3>
<ul>
  <li>المعالجة القياسية: 4-6 أسابيع</li>
  <li>وثيقة السفر الطارئة: 3-5 أيام عمل</li>
</ul>

<h3>الرسوم</h3>
<ul>
  <li>جواز سفر جديد/تجديد: 100 دولار أمريكي</li>
  <li>وثيقة السفر الطارئة: 50 دولار أمريكي</li>
  <li>الاستبدال (مفقود/مسروق): 120 دولار أمريكي</li>
</ul>

<p>يرجى تحديد موعد قبل زيارة القنصلية.</p>`
    }
  },
  {
    en: {
      title: "Visa Applications",
      slug: "visa-applications",
      description: "Entry visas for foreign nationals wishing to travel to Burundi for tourism, business, or other purposes.",
      content: `<h2>Visa Applications</h2>
<p>The Consulate processes visa applications for foreign nationals wishing to travel to Burundi.</p>

<h3>Visa Types</h3>
<ul>
  <li><strong>Tourist Visa:</strong> For tourism and leisure travel (up to 30 days)</li>
  <li><strong>Business Visa:</strong> For business meetings and commercial activities (up to 90 days)</li>
  <li><strong>Transit Visa:</strong> For travelers passing through Burundi (up to 72 hours)</li>
  <li><strong>Work Visa:</strong> For employment purposes (requires work permit)</li>
  <li><strong>Student Visa:</strong> For educational purposes</li>
</ul>

<h3>Required Documents</h3>
<ul>
  <li>Valid passport (minimum 6 months validity)</li>
  <li>Completed visa application form</li>
  <li>2 passport-size photographs</li>
  <li>Proof of accommodation in Burundi</li>
  <li>Return flight ticket or itinerary</li>
  <li>Proof of sufficient funds</li>
  <li>Invitation letter (for business visa)</li>
  <li>Yellow fever vaccination certificate</li>
</ul>

<h3>Processing Times</h3>
<ul>
  <li>Standard processing: 5-7 business days</li>
  <li>Express processing: 2-3 business days (additional fee)</li>
</ul>

<h3>Fees</h3>
<ul>
  <li>Single entry visa: $50 USD</li>
  <li>Multiple entry visa: $100 USD</li>
  <li>Transit visa: $30 USD</li>
  <li>Express processing: +$25 USD</li>
</ul>`,
      icon: "id-card",
      order: 2,
      isActive: true
    },
    fr: {
      title: "Demandes de visa",
      description: "Visas d'entrée pour les ressortissants étrangers souhaitant se rendre au Burundi pour le tourisme, les affaires ou d'autres fins.",
      content: `<h2>Aperçu</h2>
<p>Le Consulat traite les demandes de visa pour les ressortissants étrangers souhaitant se rendre au Burundi. Nous proposons différents types de visas pour répondre aux différents objectifs de voyage.</p>

<h2>Types de visas</h2>
<ul>
<li><strong>Visa touristique</strong> - Pour les voyages de loisirs et le tourisme</li>
<li><strong>Visa d'affaires</strong> - Pour les réunions d'affaires, conférences et activités commerciales</li>
<li><strong>Visa de transit</strong> - Pour les voyageurs en transit par le Burundi</li>
<li><strong>Visa de travail</strong> - Pour l'emploi</li>
<li><strong>Visa étudiant</strong> - Pour les études</li>
</ul>

<h2>Documents requis</h2>
<ul>
<li>Formulaire de demande de visa rempli</li>
<li>Passeport valide d'au moins 6 mois</li>
<li>Deux photos d'identité récentes</li>
<li>Preuve d'hébergement au Burundi</li>
<li>Billet de retour ou itinéraire de voyage</li>
<li>Preuve de fonds suffisants</li>
<li>Certificat de vaccination contre la fièvre jaune</li>
</ul>

<h2>Délai de traitement</h2>
<p>Traitement standard : 5-7 jours ouvrables<br/>Traitement express : 2-3 jours ouvrables (frais supplémentaires)</p>`
    },
    ar: {
      title: "طلبات التأشيرة",
      description: "تأشيرات الدخول للرعايا الأجانب الراغبين في السفر إلى بوروندي للسياحة أو الأعمال أو أغراض أخرى.",
      content: `<h2>طلبات التأشيرة</h2>
<p>تقوم القنصلية بمعالجة طلبات التأشيرة للرعايا الأجانب الراغبين في السفر إلى بوروندي.</p>

<h3>أنواع التأشيرات</h3>
<ul>
  <li><strong>تأشيرة سياحية:</strong> للسياحة والسفر الترفيهي (حتى 30 يومًا)</li>
  <li><strong>تأشيرة أعمال:</strong> للاجتماعات التجارية والأنشطة التجارية (حتى 90 يومًا)</li>
  <li><strong>تأشيرة عبور:</strong> للمسافرين العابرين عبر بوروندي (حتى 72 ساعة)</li>
  <li><strong>تأشيرة عمل:</strong> لأغراض التوظيف (تتطلب تصريح عمل)</li>
  <li><strong>تأشيرة طالب:</strong> للأغراض التعليمية</li>
</ul>

<h3>المستندات المطلوبة</h3>
<ul>
  <li>جواز سفر ساري المفعول (صلاحية لا تقل عن 6 أشهر)</li>
  <li>نموذج طلب التأشيرة مكتمل</li>
  <li>صورتان بحجم جواز السفر</li>
  <li>إثبات الإقامة في بوروندي</li>
  <li>تذكرة طيران العودة أو خط السير</li>
  <li>إثبات الأموال الكافية</li>
  <li>خطاب دعوة (لتأشيرة الأعمال)</li>
  <li>شهادة التطعيم ضد الحمى الصفراء</li>
</ul>

<h3>أوقات المعالجة</h3>
<ul>
  <li>المعالجة القياسية: 5-7 أيام عمل</li>
  <li>المعالجة السريعة: 2-3 أيام عمل (رسوم إضافية)</li>
</ul>

<h3>الرسوم</h3>
<ul>
  <li>تأشيرة دخول واحدة: 50 دولار أمريكي</li>
  <li>تأشيرة دخول متعددة: 100 دولار أمريكي</li>
  <li>تأشيرة عبور: 30 دولار أمريكي</li>
  <li>المعالجة السريعة: +25 دولار أمريكي</li>
</ul>`
    }
  },
  {
    en: {
      title: "Birth Certificates",
      slug: "birth-certificates",
      description: "Registration of births abroad and issuance of birth certificates for children born to Burundian parents.",
      content: `<h2>Birth Certificate Services</h2>
<p>The Consulate assists Burundian nationals with birth registration and certificate issuance for children born abroad.</p>

<h3>Services Offered</h3>
<ul>
  <li>Birth registration for children born in Sudan</li>
  <li>Issuance of Burundian birth certificates</li>
  <li>Transcription of foreign birth certificates</li>
  <li>Copies of birth certificates</li>
</ul>

<h3>Eligibility</h3>
<p>Children are eligible for Burundian birth registration if:</p>
<ul>
  <li>At least one parent is a Burundian citizen</li>
  <li>The child was born in Sudan or another country</li>
</ul>

<h3>Required Documents</h3>
<ul>
  <li>Original birth certificate from local authorities (translated if not in English/French)</li>
  <li>Parents' valid passports (Burundian)</li>
  <li>Parents' marriage certificate (if applicable)</li>
  <li>Parents' national ID cards</li>
  <li>2 passport-size photos of the child</li>
  <li>Completed birth registration form</li>
</ul>

<h3>Process</h3>
<ol>
  <li>Submit application with all required documents</li>
  <li>Documents verified by consular staff</li>
  <li>Registration recorded in consular register</li>
  <li>Birth certificate issued</li>
</ol>

<h3>Processing Time</h3>
<p>2-4 weeks from submission of complete application</p>

<h3>Fees</h3>
<ul>
  <li>Birth registration and first certificate: $40 USD</li>
  <li>Additional copies: $15 USD each</li>
</ul>`,
      icon: "baby",
      order: 3,
      isActive: true
    },
    fr: {
      title: "Actes de naissance",
      description: "Enregistrement des naissances à l'étranger et délivrance d'actes de naissance pour les enfants nés de parents burundais.",
      content: `<h2>Aperçu</h2>
<p>Le Consulat fournit des services d'enregistrement des naissances pour les enfants nés de parents burundais au Soudan. Cela garantit que la citoyenneté burundaise de votre enfant est correctement documentée.</p>

<h2>Services offerts</h2>
<ul>
<li><strong>Enregistrement des naissances</strong> - Enregistrement officiel des naissances à l'étranger</li>
<li><strong>Délivrance d'actes de naissance</strong> - Obtention d'actes de naissance burundais officiels</li>
<li><strong>Enregistrement tardif</strong> - Pour les naissances non enregistrées dans le délai standard</li>
</ul>

<h2>Éligibilité</h2>
<p>Les enfants sont éligibles à l'enregistrement si au moins un parent est citoyen burundais au moment de la naissance.</p>

<h2>Documents requis</h2>
<ul>
<li>Certificat de naissance de l'hôpital ou dossier de naissance</li>
<li>Passeports ou cartes d'identité nationales des parents</li>
<li>Certificat de mariage des parents (le cas échéant)</li>
<li>Formulaire d'enregistrement rempli</li>
<li>Deux photos de l'enfant</li>
</ul>

<h2>Délai de traitement</h2>
<p>Traitement standard : 2-4 semaines</p>`
    },
    ar: {
      title: "شهادات الميلاد",
      description: "تسجيل المواليد في الخارج وإصدار شهادات الميلاد للأطفال المولودين لآباء بورونديين.",
      content: `<h2>خدمات شهادات الميلاد</h2>
<p>تساعد القنصلية المواطنين البورونديين في تسجيل المواليد وإصدار الشهادات للأطفال المولودين في الخارج.</p>

<h3>الخدمات المقدمة</h3>
<ul>
  <li>تسجيل المواليد للأطفال المولودين في السودان</li>
  <li>إصدار شهادات الميلاد البوروندية</li>
  <li>نسخ شهادات الميلاد الأجنبية</li>
  <li>نسخ من شهادات الميلاد</li>
</ul>

<h3>الأهلية</h3>
<p>الأطفال مؤهلون لتسجيل الميلاد البوروندي إذا:</p>
<ul>
  <li>أحد الوالدين على الأقل مواطن بوروندي</li>
  <li>ولد الطفل في السودان أو بلد آخر</li>
</ul>

<h3>المستندات المطلوبة</h3>
<ul>
  <li>شهادة الميلاد الأصلية من السلطات المحلية (مترجمة إذا لم تكن بالإنجليزية/الفرنسية)</li>
  <li>جوازات سفر الوالدين السارية (بوروندية)</li>
  <li>شهادة زواج الوالدين (إن وجدت)</li>
  <li>بطاقات الهوية الوطنية للوالدين</li>
  <li>صورتان بحجم جواز السفر للطفل</li>
  <li>نموذج تسجيل الميلاد مكتمل</li>
</ul>

<h3>العملية</h3>
<ol>
  <li>تقديم الطلب مع جميع المستندات المطلوبة</li>
  <li>التحقق من المستندات من قبل موظفي القنصلية</li>
  <li>تسجيل الميلاد في السجل القنصلي</li>
  <li>إصدار شهادة الميلاد</li>
</ol>

<h3>وقت المعالجة</h3>
<p>2-4 أسابيع من تقديم الطلب الكامل</p>

<h3>الرسوم</h3>
<ul>
  <li>تسجيل الميلاد والشهادة الأولى: 40 دولار أمريكي</li>
  <li>النسخ الإضافية: 15 دولار أمريكي لكل نسخة</li>
</ul>`
    }
  },
  {
    en: {
      title: "Document Legalization",
      slug: "document-legalization",
      description: "Authentication and legalization of documents for use in Burundi or Sudan.",
      content: `<h2>Document Legalization Services</h2>
<p>The Consulate provides document authentication and legalization services for official documents to be used in Burundi or Sudan.</p>

<h3>Services Offered</h3>
<ul>
  <li>Authentication of Burundian documents for use in Sudan</li>
  <li>Legalization of Sudanese documents for use in Burundi</li>
  <li>Certification of document copies</li>
  <li>Notarization of signatures</li>
</ul>

<h3>Document Types</h3>
<p>We can legalize the following types of documents:</p>
<ul>
  <li>Educational certificates and transcripts</li>
  <li>Marriage certificates</li>
  <li>Birth certificates</li>
  <li>Death certificates</li>
  <li>Commercial documents</li>
  <li>Court documents</li>
  <li>Medical certificates</li>
  <li>Police clearance certificates</li>
</ul>

<h3>Requirements</h3>
<ul>
  <li>Original document or certified copy</li>
  <li>Documents must first be authenticated by the issuing authority</li>
  <li>Foreign documents must be translated into English or French</li>
  <li>Valid ID of the applicant</li>
</ul>

<h3>Process</h3>
<ol>
  <li>Submit original document with application form</li>
  <li>Pay applicable fees</li>
  <li>Document reviewed and verified</li>
  <li>Consular stamp/seal applied</li>
  <li>Document returned to applicant</li>
</ol>

<h3>Processing Time</h3>
<p>1-3 business days for standard processing</p>

<h3>Fees</h3>
<ul>
  <li>Document legalization: $25 USD per document</li>
  <li>Certified copies: $10 USD per page</li>
  <li>Signature notarization: $15 USD</li>
</ul>`,
      icon: "stamp",
      order: 4,
      isActive: true
    },
    fr: {
      title: "Légalisation de documents",
      description: "Authentification et légalisation de documents pour utilisation au Burundi ou au Soudan.",
      content: `<h2>Aperçu</h2>
<p>Le Consulat fournit des services d'authentification et de légalisation pour les documents devant être utilisés officiellement au Burundi ou au Soudan.</p>

<h2>Services offerts</h2>
<ul>
<li><strong>Authentification de documents</strong> - Vérification de l'authenticité des documents</li>
<li><strong>Légalisation</strong> - Certification officielle pour usage international</li>
<li><strong>Services d'apostille</strong> - Pour les pays parties à la Convention de La Haye</li>
</ul>

<h2>Types de documents</h2>
<ul>
<li>Certificats et diplômes d'études</li>
<li>Certificats de mariage</li>
<li>Documents commerciaux</li>
<li>Documents juridiques</li>
<li>Dossiers médicaux</li>
<li>Procurations</li>
</ul>

<h2>Exigences</h2>
<ul>
<li>Document(s) original(aux) à légaliser</li>
<li>Copie de la pièce d'identité ou du passeport du demandeur</li>
<li>Formulaire de demande rempli</li>
<li>Paiement des frais applicables</li>
</ul>

<h2>Délai de traitement</h2>
<p>Traitement standard : 3-5 jours ouvrables</p>`
    },
    ar: {
      title: "توثيق المستندات",
      description: "المصادقة وتوثيق المستندات للاستخدام في بوروندي أو السودان.",
      content: `<h2>خدمات توثيق المستندات</h2>
<p>تقدم القنصلية خدمات المصادقة والتوثيق للمستندات الرسمية لاستخدامها في بوروندي أو السودان.</p>

<h3>الخدمات المقدمة</h3>
<ul>
  <li>المصادقة على المستندات البوروندية للاستخدام في السودان</li>
  <li>توثيق المستندات السودانية للاستخدام في بوروندي</li>
  <li>التصديق على نسخ المستندات</li>
  <li>التوثيق على التوقيعات</li>
</ul>

<h3>أنواع المستندات</h3>
<p>يمكننا توثيق الأنواع التالية من المستندات:</p>
<ul>
  <li>الشهادات التعليمية والكشوف الدراسية</li>
  <li>شهادات الزواج</li>
  <li>شهادات الميلاد</li>
  <li>شهادات الوفاة</li>
  <li>المستندات التجارية</li>
  <li>مستندات المحاكم</li>
  <li>الشهادات الطبية</li>
  <li>شهادات حسن السيرة</li>
</ul>

<h3>المتطلبات</h3>
<ul>
  <li>المستند الأصلي أو نسخة مصدقة</li>
  <li>يجب أولاً المصادقة على المستندات من قبل الجهة المصدرة</li>
  <li>يجب ترجمة المستندات الأجنبية إلى الإنجليزية أو الفرنسية</li>
  <li>هوية سارية لمقدم الطلب</li>
</ul>

<h3>العملية</h3>
<ol>
  <li>تقديم المستند الأصلي مع نموذج الطلب</li>
  <li>دفع الرسوم المطبقة</li>
  <li>مراجعة والتحقق من المستند</li>
  <li>وضع ختم/طابع القنصلية</li>
  <li>إعادة المستند لمقدم الطلب</li>
</ol>

<h3>وقت المعالجة</h3>
<p>1-3 أيام عمل للمعالجة القياسية</p>

<h3>الرسوم</h3>
<ul>
  <li>توثيق المستند: 25 دولار أمريكي لكل مستند</li>
  <li>النسخ المصدقة: 10 دولار أمريكي لكل صفحة</li>
  <li>التوثيق على التوقيع: 15 دولار أمريكي</li>
</ul>`
    }
  },
  {
    en: {
      title: "Citizen Assistance",
      slug: "citizen-assistance",
      description: "Support for Burundian nationals in emergencies, including medical, legal, and repatriation assistance.",
      content: `<h2>Citizen Assistance Services</h2>
<p>The Consulate provides support and assistance to Burundian nationals facing emergencies or difficulties in Sudan.</p>

<h3>Types of Assistance</h3>

<h4>Emergency Assistance</h4>
<ul>
  <li>Medical emergencies and hospitalization</li>
  <li>Natural disasters and civil unrest</li>
  <li>Victims of crime</li>
  <li>Missing persons</li>
  <li>Death of a citizen abroad</li>
</ul>

<h4>Legal Assistance</h4>
<ul>
  <li>Arrest or detention of Burundian citizens</li>
  <li>Referrals to local lawyers</li>
  <li>Court document facilitation</li>
  <li>Prison visits</li>
</ul>

<h4>Repatriation</h4>
<ul>
  <li>Emergency travel documents for stranded citizens</li>
  <li>Coordination with family members</li>
  <li>Assistance with travel arrangements</li>
  <li>Repatriation of remains</li>
</ul>

<h4>General Support</h4>
<ul>
  <li>Welfare and whereabouts inquiries</li>
  <li>Communication with family in Burundi</li>
  <li>Guidance on local resources and services</li>
</ul>

<h3>Emergency Contacts</h3>
<p><strong>Consulate Emergency Hotline:</strong> +249-XXX-XXX-XXX</p>
<p><strong>Available:</strong> 24/7 for emergencies</p>

<h3>What We Cannot Do</h3>
<ul>
  <li>Intervene in court proceedings</li>
  <li>Pay bills or provide financial assistance</li>
  <li>Get you out of jail</li>
  <li>Provide legal advice</li>
</ul>

<h3>Registration</h3>
<p>We encourage all Burundian nationals in Sudan to register with the Consulate to receive important updates and facilitate assistance in emergencies.</p>`,
      icon: "hands-helping",
      order: 5,
      isActive: true
    },
    fr: {
      title: "Assistance aux citoyens",
      description: "Soutien aux ressortissants burundais en situation d'urgence, y compris l'assistance médicale, juridique et le rapatriement.",
      content: `<h2>Aperçu</h2>
<p>Le Consulat fournit assistance et soutien aux citoyens burundais confrontés à des urgences ou des situations difficiles au Soudan.</p>

<h2>Services offerts</h2>
<ul>
<li><strong>Assistance d'urgence</strong> - Soutien pendant les crises, catastrophes naturelles ou troubles civils</li>
<li><strong>Assistance médicale</strong> - Aide en cas d'urgences médicales et visites à l'hôpital</li>
<li><strong>Assistance juridique</strong> - Conseils sur les questions juridiques et orientation vers un conseiller juridique</li>
<li><strong>Rapatriement</strong> - Assistance pour le retour au Burundi en situation d'urgence</li>
<li><strong>Visites de bien-être</strong> - Visites aux citoyens détenus ou hospitalisés</li>
</ul>

<h2>Ce que nous pouvons aider</h2>
<ul>
<li>Documents perdus ou volés</li>
<li>Victimes de crimes</li>
<li>Urgences médicales</li>
<li>Décès d'un membre de la famille à l'étranger</li>
<li>Arrestation ou détention</li>
<li>Catastrophes naturelles ou urgences civiles</li>
</ul>

<h2>Ce que nous ne pouvons pas faire</h2>
<ul>
<li>Fournir une assistance financière ou des prêts</li>
<li>Intervenir dans les procédures judiciaires</li>
<li>Vous faire sortir de prison</li>
<li>Fournir des conseils juridiques</li>
</ul>`
    },
    ar: {
      title: "مساعدة المواطنين",
      description: "الدعم للرعايا البورونديين في حالات الطوارئ، بما في ذلك المساعدة الطبية والقانونية والترحيل.",
      content: `<h2>خدمات مساعدة المواطنين</h2>
<p>تقدم القنصلية الدعم والمساعدة للرعايا البورونديين الذين يواجهون حالات طوارئ أو صعوبات في السودان.</p>

<h3>أنواع المساعدة</h3>

<h4>المساعدة الطارئة</h4>
<ul>
  <li>الطوارئ الطبية والدخول للمستشفى</li>
  <li>الكوارث الطبيعية والاضطرابات المدنية</li>
  <li>ضحايا الجريمة</li>
  <li>الأشخاص المفقودين</li>
  <li>وفاة مواطن في الخارج</li>
</ul>

<h4>المساعدة القانونية</h4>
<ul>
  <li>اعتقال أو احتجاز المواطنين البورونديين</li>
  <li>الإحالة إلى المحامين المحليين</li>
  <li>تسهيل مستندات المحكمة</li>
  <li>زيارات السجون</li>
</ul>

<h4>الترحيل</h4>
<ul>
  <li>وثائق السفر الطارئة للمواطنين العالقين</li>
  <li>التنسيق مع أفراد الأسرة</li>
  <li>المساعدة في ترتيبات السفر</li>
  <li>ترحيل الرفات</li>
</ul>

<h4>الدعم العام</h4>
<ul>
  <li>الاستفسارات عن الرفاهية والأماكن</li>
  <li>التواصل مع الأسرة في بوروندي</li>
  <li>التوجيه حول الموارد والخدمات المحلية</li>
</ul>

<h3>جهات الاتصال في حالات الطوارئ</h3>
<p><strong>خط الطوارئ القنصلي:</strong> +249-XXX-XXX-XXX</p>
<p><strong>متاح:</strong> على مدار الساعة طوال أيام الأسبوع للطوارئ</p>

<h3>ما لا يمكننا فعله</h3>
<ul>
  <li>التدخل في إجراءات المحكمة</li>
  <li>دفع الفواتير أو تقديم المساعدة المالية</li>
  <li>إخراجك من السجن</li>
  <li>تقديم المشورة القانونية</li>
</ul>

<h3>التسجيل</h3>
<p>نشجع جميع الرعايا البورونديين في السودان على التسجيل لدى القنصلية لتلقي التحديثات المهمة وتسهيل المساعدة في حالات الطوارئ.</p>`
    }
  },
  {
    en: {
      title: "Power of Attorney",
      slug: "power-of-attorney",
      description: "Notarization and certification of power of attorney documents and other legal instruments.",
      content: `<h2>Power of Attorney Services</h2>
<p>The Consulate provides notarization and certification services for power of attorney documents and other legal instruments for Burundian citizens.</p>

<h3>Services Offered</h3>
<ul>
  <li>General Power of Attorney</li>
  <li>Special/Limited Power of Attorney</li>
  <li>Real Estate Power of Attorney</li>
  <li>Financial Power of Attorney</li>
  <li>Healthcare Power of Attorney</li>
  <li>Revocation of Power of Attorney</li>
</ul>

<h3>Document Types We Certify</h3>
<ul>
  <li>Power of Attorney documents</li>
  <li>Affidavits and declarations</li>
  <li>Consent letters for minor travel</li>
  <li>Authorization letters</li>
  <li>Statutory declarations</li>
</ul>

<h3>Requirements</h3>
<ul>
  <li>Valid Burundian passport or national ID</li>
  <li>Draft power of attorney document (we can provide templates)</li>
  <li>Information of the attorney-in-fact (person receiving power)</li>
  <li>Specific details of powers being granted</li>
  <li>Two witnesses (can be provided by consulate if needed)</li>
</ul>

<h3>Process</h3>
<ol>
  <li>Schedule an appointment</li>
  <li>Bring all required documents</li>
  <li>Review and sign documents in presence of consular officer</li>
  <li>Consular officer notarizes the document</li>
  <li>Receive certified copies</li>
</ol>

<h3>Important Notes</h3>
<ul>
  <li>Principal must appear in person</li>
  <li>Principal must be of sound mind and acting voluntarily</li>
  <li>Documents in languages other than English/French must be translated</li>
</ul>

<h3>Processing Time</h3>
<p>Same day service for appointments</p>

<h3>Fees</h3>
<ul>
  <li>Power of Attorney notarization: $35 USD</li>
  <li>Affidavit/Declaration: $25 USD</li>
  <li>Additional certified copies: $10 USD each</li>
  <li>Translation assistance: $20 USD per page</li>
</ul>`,
      icon: "file-signature",
      order: 6,
      isActive: true
    },
    fr: {
      title: "Procuration",
      description: "Notarisation et certification des procurations et autres actes juridiques.",
      content: `<h2>Aperçu</h2>
<p>Le Consulat fournit des services de notarisation et de certification pour les procurations et autres actes juridiques pour les citoyens burundais.</p>

<h2>Services offerts</h2>
<ul>
<li><strong>Procuration générale</strong> - Autorisation large pour qu'un mandataire agisse en votre nom</li>
<li><strong>Procuration spéciale</strong> - Autorisation limitée pour des transactions spécifiques</li>
<li><strong>Notarisation</strong> - Certification officielle des signatures et documents</li>
<li><strong>Déclarations sous serment</strong> - Déclarations assermentées à des fins juridiques</li>
</ul>

<h2>Utilisations courantes</h2>
<ul>
<li>Transactions immobilières au Burundi</li>
<li>Affaires bancaires et financières</li>
<li>Représentation juridique</li>
<li>Transactions commerciales</li>
<li>Affaires familiales</li>
</ul>

<h2>Documents requis</h2>
<ul>
<li>Passeport valide ou carte d'identité nationale</li>
<li>Projet de procuration</li>
<li>Coordonnées du mandataire désigné</li>
<li>Détails spécifiques des actions autorisées</li>
</ul>

<h2>Notes importantes</h2>
<ul>
<li>Toutes les parties doivent se présenter en personne au Consulat</li>
<li>Les documents doivent être en français ou accompagnés d'une traduction certifiée</li>
<li>Des témoins peuvent être requis pour certains documents</li>
</ul>

<h2>Délai de traitement</h2>
<p>Service le jour même disponible pour la plupart des documents</p>`
    },
    ar: {
      title: "التوكيل الرسمي",
      description: "التوثيق والتصديق على وثائق التوكيل والوثائق القانونية الأخرى.",
      content: `<h2>خدمات التوكيل الرسمي</h2>
<p>تقدم القنصلية خدمات التوثيق والتصديق لوثائق التوكيل والوثائق القانونية الأخرى للمواطنين البورونديين.</p>

<h3>الخدمات المقدمة</h3>
<ul>
  <li>التوكيل العام</li>
  <li>التوكيل الخاص/المحدود</li>
  <li>توكيل العقارات</li>
  <li>التوكيل المالي</li>
  <li>التوكيل الصحي</li>
  <li>إلغاء التوكيل</li>
</ul>

<h3>أنواع المستندات التي نصادق عليها</h3>
<ul>
  <li>وثائق التوكيل</li>
  <li>الإفادات والإعلانات</li>
  <li>خطابات الموافقة لسفر القاصرين</li>
  <li>خطابات التفويض</li>
  <li>الإعلانات القانونية</li>
</ul>

<h3>المتطلبات</h3>
<ul>
  <li>جواز سفر بوروندي ساري أو بطاقة هوية وطنية</li>
  <li>مسودة وثيقة التوكيل (يمكننا توفير النماذج)</li>
  <li>معلومات الوكيل (الشخص المستلم للصلاحية)</li>
  <li>التفاصيل المحددة للصلاحيات الممنوحة</li>
  <li>شاهدان (يمكن توفيرهما من القنصلية عند الحاجة)</li>
</ul>

<h3>العملية</h3>
<ol>
  <li>تحديد موعد</li>
  <li>إحضار جميع المستندات المطلوبة</li>
  <li>مراجعة وتوقيع المستندات بحضور الموظف القنصلي</li>
  <li>يوثق الموظف القنصلي المستند</li>
  <li>استلام النسخ المصدقة</li>
</ol>

<h3>ملاحظات مهمة</h3>
<ul>
  <li>يجب على الموكل الحضور شخصياً</li>
  <li>يجب أن يكون الموكل عاقلاً ويتصرف طوعاً</li>
  <li>يجب ترجمة المستندات بلغات غير الإنجليزية/الفرنسية</li>
</ul>

<h3>وقت المعالجة</h3>
<p>خدمة في نفس اليوم للمواعيد</p>

<h3>الرسوم</h3>
<ul>
  <li>توثيق التوكيل: 35 دولار أمريكي</li>
  <li>الإفادة/الإعلان: 25 دولار أمريكي</li>
  <li>النسخ المصدقة الإضافية: 10 دولار أمريكي لكل نسخة</li>
  <li>المساعدة في الترجمة: 20 دولار أمريكي لكل صفحة</li>
</ul>`
    }
  }
];

export async function seedConsularServices(strapi: Core.Strapi): Promise<void> {
  const existingServices = await strapi.documents('api::consular-service.consular-service').findMany({
    locale: 'en',
    limit: 1
  });

  if (existingServices.length > 0) {
    strapi.log.info('🌱 Consular services already seeded, skipping...');
    return;
  }

  strapi.log.info('🌱 Seeding consular services...');

  for (const service of consularServicesData) {
    try {
      // Create English version
      const created = await strapi.documents('api::consular-service.consular-service').create({
        data: {
          title: service.en.title,
          slug: service.en.slug,
          description: service.en.description,
          content: service.en.content,
          icon: service.en.icon,
          order: service.en.order,
          isActive: service.en.isActive,
          locale: 'en'
        },
        status: 'published'
      });

      strapi.log.info(`   ✓ Created (EN): ${service.en.title}`);

      // Create French version
      await strapi.documents('api::consular-service.consular-service').update({
        documentId: created.documentId,
        locale: 'fr',
        data: {
          title: service.fr.title,
          slug: service.en.slug,
          description: service.fr.description,
          content: service.fr.content,
          icon: service.en.icon,
          order: service.en.order,
          isActive: service.en.isActive
        },
        status: 'published'
      });

      strapi.log.info(`   ✓ Created (FR): ${service.fr.title}`);

      // Create Arabic version
      await strapi.documents('api::consular-service.consular-service').update({
        documentId: created.documentId,
        locale: 'ar',
        data: {
          title: service.ar.title,
          slug: service.en.slug,
          description: service.ar.description,
          content: service.ar.content,
          icon: service.en.icon,
          order: service.en.order,
          isActive: service.en.isActive
        },
        status: 'published'
      });

      strapi.log.info(`   ✓ Created (AR): ${service.ar.title}`);
    } catch (error) {
      strapi.log.error(`   ✗ Failed to create: ${service.en.title}`, error);
    }
  }

  strapi.log.info('✅ Consular services seeding complete!');
}
