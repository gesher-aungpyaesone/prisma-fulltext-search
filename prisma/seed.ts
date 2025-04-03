// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// Prisma Client ကို စတင်တည်ဆောက်သည်
const prisma = new PrismaClient();

async function main() {
  // အဓိပ္ပာယ်ရှိသော ဆောင်းပါး ၂၀ ခုကို စုစည်းပါ
  const posts = [
    {
      title: 'နေ့စဉ်ဘဝမှာ Artificial Intelligence အားတိုးတက်လာခြင်း',
      body: 'Artificial intelligence (AI) သည် ကျွန်ုပ်တို့၏ နေ့စဉ်ဘဝ၏ အစိတ်အပိုင်းတစ်ခုအဖြစ် လုပ်ဆောင်နေပါပြီ၊ smart assistants မှအစပြီး autonomous vehicles အထိ ဖြစ်လာသည်။ အခွင့်အလမ်းများမှာ အဆုံးမရှိပေမယ့် ဥပဒေပြုမှုနှင့် အလုပ်အကိုင်မဖြစ်သောခြင်းတို့သည် အရေးကြီးသော အကြောင်းအရာများ ဖြစ်လျက်ရှိသည်။',
      description:
        'AI သည် ကျွန်ုပ်တို့၏ နေ့စဉ်ဘဝကို က 어떻게 ထိရောက်အောင် ပြောင်းလဲစေကြောင်းနှင့် ထွန်းကားလာသော အနာဂတ်အကြောင်းကို လေ့လာခြင်း။',
      published: true,
    },
    {
      title: 'Blockchain သည် ဘဏ္ဍာရေးလုပ်ငန်းကို ဘယ်လို အားတိုးပေးနေသလဲ',
      body: 'Blockchain နည်းပညာသည် လုံခြုံမှုရှိပြီး ယုံကြည်စိတ်ချရသော ငွေကြေးလွှဲပြောင်းမှုများကို အကောင်အထည်ဖော်ပြီး အပြုသဘောဆောင်ပြီး အသုံးပြုနိုင်သော ပတ်ဝန်းကျင်ကို ဖန်တီးပေးနေသည်။ အင်တာနက်များသာမက ကျေးဇူးပြုသောပြည်တွင်း၊ blockchain ရဲ့ အကျိုးအပြုမှုကော အခြားသော စက်မှုလုပ်ငန်းများနှင့် မိုဘိုင်းဘဏ်လုပ်ငန်းများမှာ ဘယ်လို အကျိုးသက်ရောက်မှုများရှိနေလဲ ဆိုတာကို အလေ့လာဖို့လိုပါတယ်။',
      description:
        'Blockchain ရဲ့ သဘောတရားနဲ့ ဘဏ္ဍာရေးလုပ်ငန်းအတွက် တိုးတက်မှုရှိလာပုံကို နားလည်ရန်။',
      published: true,
    },
    {
      title: '2025 ခုနှစ်တွင် Web Development: ရှေ့လာရမည့် နည်းပညာများ',
      body: 'Web development ကဏ္ဍသည် မကြာသေးမီအချိန်ကနေ အမြဲတိုးတက်နေပါသည်။ 2025 ခုနှစ်တွင် JavaScript frameworks များဖြစ်သော React နှင့် Vue များကို ပိုမိုအသုံးပြုလာပြီး မိုဘိုင်းမူအခြေခံဒီဇိုင်းများနှင့် AI-powered development tools တွေအတွက် အသစ်သော ရေစီးကြောင်းနှင့် တိုးတက်မှုများကို ကြိုးစားဖြစ်လာပါလိမ့်မည်။',
      description:
        '2025 ခုနှစ်တွင် web development ၏ မျိုးစုံသော နည်းပညာများနှင့် အခွင့်အလမ်းများကို ရွေးချယ်ဖို့လိုပါတယ်။',
      published: true,
    },
    {
      title: 'ဒစ်ဂျစ်တယ်ကမ္ဘာတွင် Cybersecurity ၏ အရေးပါမှု',
      body: 'ကျွန်ုပ်တို့၏ ကမ္ဘာတွင် ဆက်သွယ်မှုအကြောင်းအရာများ ပိုမိုရပ်တန့်လာပြီး cybersecurity ၏ အရေးပါမှုမှာ ယခင်ထက် ပိုမိုတိုးတက်လာသည်။ Phishing attacks မှ ransomware အထိ လုံခြုံမှုရှိသော ဒေတာများကို ကာကွယ်ရန် ကုမ္ပဏီများသည် အဆင့်မြင့်ထားရှိပြီး ဤနယ်ပယ်တွင် လုပ်ဆောင်နေကြသည်။',
      description:
        'Cybersecurity ၏ အရေးပါမှုနှင့် ကုမ္ပဏီများက ဘယ်လို လုပ်ဆောင်ကြောင်းကို စိစစ်လေ့လာခြင်း။',
      published: true,
    },
    {
      title: 'Cloud Computing ၏ တိုးတက်မှု: ဘာတွေကို ဦးဆောင်နေသလဲ?',
      body: 'Cloud computing သည် အတော်လေး တိုးတက်ခဲ့ပြီးပြီ။ Edge computing နှင့် serverless architecture ကနေ cloud services တွေ၏ လုပ်ဆောင်နိုင်စွမ်း၊ စိတ်ချရမှုနှင့် အဆင်ပြေမှုများက တိုးတက်လာပါတယ်။',
      description:
        'Cloud computing ၏ ရှေ့ဆောင်အဆင့်များကို ဤဆောင်းပါးမှာ လေ့လာသင့်ပါတယ်။',
      published: true,
    },
    {
      title:
        'Remote Work ၏ အနာဂတ်: ဒစ်ဂျစ်တယ်အပေါ် အတည်တကျ နှင့် ပေါင်းစည်းခြင်း',
      body: 'Remote work သည် လျှပ်စစ်နည်းစနစ်တစ်ခုဖြစ်လာသည်။ ဒစ်ဂျစ်တယ်နှင့် ပေါင်းစည်းခြင်းက remote work ၏ အနာဂတ်မှာ အဓိကခွဲခြားမှုတစ်ခုဖြစ်လာသည်။',
      description:
        'Remote work နှင့် ဒစ်ဂျစ်တယ်ပေါ် တိုးတက်လာလာမည့် အနာဂတ်တွင် ဘာတွေရှိမလဲဆိုတာကို စဉ်းစားပါ။',
      published: true,
    },
    // [Continue with the rest of the posts]
  ];

  // Database မှာ post တွေကို create သို့မဟုတ် update လုပ်ရန် upsert ကို အသုံးပြုပါ
  const createdPosts = await Promise.all(
    posts.map((post) =>
      prisma.article.upsert({
        where: { title: post.title }, // title ပေါ်မှာ unique constraint ရှိဟု တွေးထားခြင်း
        update: {},
        create: post,
      }),
    ),
  );

  console.log({ createdPosts });
}

// main function ကို run လုပ်ပါ
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Prisma Client ကို အဆုံးသတ်ပြီး ပိတ်ပါ
    await prisma.$disconnect();
  });
