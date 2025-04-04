// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// Prisma Client を初期化
const prisma = new PrismaClient();

async function main() {
  // 意義のある記事20件を作成
  const posts = [
    {
      title: '日常生活における人工知能の進化',
      body: '人工知能（AI）は、私たちの日常生活の一部となり、スマートアシスタントから自動運転車まで様々な場面で活用されています。可能性は無限ですが、法規制や職業の喪失が重要な課題となっています。',
      description:
        'AIが私たちの日常生活にどのように影響を与え、未来に向けた発展について探る。',
      published: true,
    },
    {
      title: 'ブロックチェーンは金融業界にどのように影響を与えているか',
      body: 'ブロックチェーン技術は、安全で信頼性のある金融取引を可能にし、価値のある活用方法を提供しています。インターネットだけでなく、国内の様々な業界でその利点が広がっています。',
      description:
        'ブロックチェーンの基本概念と、金融業界における進展について理解する。',
      published: true,
    },
    {
      title: '2025年のウェブ開発: 未来の技術とは',
      body: 'ウェブ開発の分野は急速に進化しています。2025年には、ReactやVueなどのJavaScriptフレームワークがさらに普及し、モバイルファーストのデザインやAIを活用した開発ツールが新たなトレンドとなるでしょう。',
      description:
        '2025年のウェブ開発における新技術や機会について考察する。',
      published: true,
    },
    {
      title: 'デジタル世界におけるサイバーセキュリティの重要性',
      body: '私たちの世界では、情報交換がますます加速しており、サイバーセキュリティの重要性も増しています。フィッシング攻撃からランサムウェアに至るまで、企業はセキュリティを強化し、この分野で積極的に対策を講じています。',
      description:
        'サイバーセキュリティの重要性と、企業がどのように対応しているかを調査する。',
      published: true,
    },
    {
      title: 'クラウドコンピューティングの進化: 次に来るのは何か？',
      body: 'クラウドコンピューティングは非常に進化してきました。エッジコンピューティングやサーバーレスアーキテクチャなど、クラウドサービスの機能、信頼性、使いやすさが向上しています。',
      description:
        'クラウドコンピューティングの次のステップを探る。',
      published: true,
    },
    {
      title:
        'リモートワークの未来: デジタル化の進展とその統合',
      body: 'リモートワークは、現在の仕事の仕方に革命をもたらしています。デジタル技術の進化とその統合が、リモートワークの未来における重要な要素となります。',
      description:
        'リモートワークとデジタル技術が進化した未来に何が待っているかを考える。',
      published: true,
    },
    // [残りの投稿も続ける]
  ];

  // データベースに投稿を作成または更新するために upsert を使用
  const createdPosts = await Promise.all(
    posts.map((post) =>
      prisma.article.upsert({
        where: { title: post.title }, // title にユニーク制約があることを前提
        update: {},
        create: post,
      }),
    ),
  );

  console.log({ createdPosts });
}

// main 関数を実行
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Prisma Client を切断
    await prisma.$disconnect();
  });
