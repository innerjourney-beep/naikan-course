const APPLY_URL = "https://forms.gle/KoC25Gw3dQ23xRes8";

export default function Home() {

  return (
    <main className="bg-base text-ink">
      {/* ==================== セクション1：ヒーロー ==================== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden">
        {/* 装飾：抽象的な水面のSVG背景 */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <radialGradient id="lake" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1B3A57" />
                <stop offset="100%" stopColor="#FBFAF7" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="400" r="300" fill="url(#lake)" />
            {Array.from({ length: 8 }).map((_, i) => (
              <circle key={i} cx="400" cy="400" r={50 + i * 40} fill="none" stroke="#1B3A57" strokeWidth="0.5" />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="number-label mb-12">— 0期生プログラム —</p>

          <h1 className="font-serif font-medium text-deep mb-10 leading-relaxed" style={{ fontSize: "clamp(28px, 6vw, 52px)" }}>
            もう、自分の感覚に
            <br />
            嘘をつかない。
          </h1>

          <p className="text-lg md:text-xl text-ink/80 leading-loose mb-12">
            自己一致し、
            <br className="md:hidden" />
            内観を一生使える技術にする3ヶ月。
          </p>

          <div className="gold-divider"></div>

          <p className="font-serif text-mist tracking-widest mb-12">
            ブロック外しセラピスト
            <br />
            <span className="text-deep">なるいまい</span>
          </p>

          <a
            href="#apply"
            className="cta-button inline-block bg-terracotta text-paper px-12 py-4 rounded-sm font-medium tracking-wider hover:bg-terracottaDark"
          >
            詳細を見る
          </a>
        </div>

        {/* 下スクロール指示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-gold/40 mx-auto"></div>
        </div>
      </section>

      {/* ==================== セクション2：共感パート ==================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 01 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-12 leading-relaxed text-center">
            こんな状態の自分に、
            <br />
            心当たりはありませんか。
          </h2>

          <ul className="space-y-6 mb-16">
            {[
              "内観のやり方はわかってきた。でも一人でやると「これで合ってるのかな」が消えない",
              "ワークをやって、気づきもあった。なのに、体感が変わらない",
              "ブロックを見つけたところで、なぜか先に進めない瞬間がある",
              "何度内観しても、同じ場所で止まる気がする",
              "内観しても、結局、身体の奥の不安が消えないし現実変わらない",
            ].map((text, i) => (
              <li key={i} className="flex gap-4 leading-loose">
                <span className="text-gold flex-shrink-0 mt-1">—</span>
                <span className="text-ink">{text}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-4 text-ink/80 leading-loose">
            <p>もしひとつでも当てはまるなら、</p>
            <p>これは「あなたの能力不足」が原因ではありません。</p>
          </div>

          <div className="gold-divider"></div>

          <p className="font-serif text-deep text-xl md:text-2xl text-center font-medium leading-relaxed">
            内観には、必ず止まる場所があります。
          </p>
          <p className="text-center text-ink/70 mt-4">そして、止まる場所には理由があります。</p>
        </div>
      </section>

      {/* ==================== セクション3：問題提起 ==================== */}
      <section className="px-6 py-24 md:py-32 bg-paper section-fade">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 02 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-16 leading-relaxed text-center">
            なぜ、内観は
            <br />
            途中で止まるのか。
          </h2>

          <p className="leading-loose mb-8">
            内観をしていると、ある瞬間に、ふっと意識が逸れることがあります。
          </p>

          <div className="my-12 space-y-3 text-ink/80 italic font-serif pl-6 border-l-2 border-gold/40">
            <p>「あ、今日はもうやめておこう」</p>
            <p>「なんだか疲れたな」</p>
            <p>「これ以上潜っても、たぶん何も出ない」</p>
          </div>

          <p className="leading-loose mb-4">そう思って、ノートを閉じる。</p>
          <p className="leading-loose mb-12">でも、本当は——</p>

          <p className="font-serif text-deep text-xl md:text-2xl text-center font-medium leading-relaxed my-16">
            そこに、感じたくない何かが
            <br />
            あったから止まった。
          </p>

          {/* 図解：内観が止まる構造 */}
          <div className="my-20 py-12 px-8 bg-base border-y border-gold/20">
            <p className="text-center text-soft text-sm mb-8 tracking-widest">内観が止まる構造</p>
            <div className="space-y-4 text-center">
              {[
                { text: "表層の悩み", strong: false },
                { text: "内観で見えた気づき", strong: false },
                { text: "ここで止まる ← 感じたくない感情", strong: true },
                { text: "罪悪感 / 劣等感 / 無価値感", strong: false },
                { text: "崩したくないアイデンティティ", strong: false },
                { text: "本当の根源", strong: false },
              ].map((item, i) => (
                <div key={i}>
                  <p className={item.strong ? "text-deep font-bold text-lg" : "text-ink/80"}>
                    {item.text}
                  </p>
                  {i < 5 && <p className="text-gold mt-2">▼</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 leading-loose">
            <p>内観が止まる瞬間、その奥には必ず「感じたくない感情」があります。</p>
            <p className="font-serif text-deep text-lg md:text-xl font-medium">
              それは多くの場合、罪悪感・劣等感・無価値感——
            </p>
            <p>人が「生きていけなくなる」と無意識に判断する、生存に関わる感情です。</p>
            <p>そして、その感情の奥にはもう一つあります。</p>
            <p className="font-serif text-deep text-lg md:text-xl font-medium">
              「崩したくないアイデンティティ」。
            </p>
          </div>

          <div className="my-12 space-y-3 text-ink/80 italic font-serif pl-6 border-l-2 border-mist/40">
            <p>「いい娘でいる私」</p>
            <p>「強くあらねばならない私」</p>
            <p>「人に迷惑をかけない私」</p>
            <p>「ちゃんとしている私」</p>
          </div>

          <div className="space-y-6 leading-loose">
            <p>このアイデンティティが崩れることを、私たちは「死」と同じくらい怖がります。</p>
            <p>だから内観は、その手前で必ず止まる。</p>
            <p>そして止まった自分を、人は責めます。</p>
          </div>

          <div className="my-12 space-y-3 text-ink/80 italic font-serif pl-6 border-l-2 border-mist/40">
            <p>「私はまだ甘い」</p>
            <p>「やっぱり私には無理だ」</p>
            <p>「みんなはできているのに」</p>
          </div>

          <p className="leading-loose mb-12">——でも、違うんです。</p>

          <div className="text-center py-12 border-y border-gold/20">
            <p className="font-serif text-deep text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              止まったのではなく、
              <br />
              止められていた。
            </p>
            <p className="text-ink/80">止めていた構造を知らなかっただけ。</p>
            <p className="text-ink/80 mt-2">それを知れば、誰でも、その先へ潜れます。</p>
          </div>
        </div>
      </section>

      {/* ==================== セクション4：解決の方向性 ==================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto text-center">
          <p className="number-label mb-6">— 03 —</p>
          <h2 className="font-serif text-deep text-3xl md:text-4xl font-medium mb-16 leading-relaxed">
            内観を、
            <br />
            「技術」にする。
          </h2>

          <div className="space-y-6 text-left leading-loose mb-12">
            <p>内観は、才能ではありません。</p>
            <p>スピリチュアルな感性でもありません。</p>
          </div>

          <p className="font-serif text-deep text-xl md:text-2xl font-medium leading-relaxed my-16">
            構造を理解すれば、
            <br />
            誰でも、何度でも、再現できる。
          </p>

          <p className="text-ink/80 mb-12">これが、私が3年以上かけてたどり着いた結論です。</p>

          <div className="gold-divider"></div>

          <div className="space-y-4 text-left leading-loose mb-12">
            <p>止まる場所には、パターンがあります。</p>
            <p>その手前で出てくる感情にも、パターンがあります。</p>
            <p>崩れそうになるアイデンティティにも、パターンがあります。</p>
          </div>

          <p className="text-left leading-loose mb-4">
            このパターンを知り、構造として体に落とし込めば——
          </p>

          <p className="font-serif text-deep text-xl md:text-2xl font-medium text-left my-12">
            もう、内観で迷うことはありません。
          </p>

          <div className="space-y-4 text-left leading-loose mb-12">
            <p>占いに頼らなくていい。</p>
            <p>「これで合ってますか？」と誰かに聞かなくていい。</p>
          </div>

          <div className="space-y-2 text-left text-ink/80 mb-12">
            <p>夢の意味も、</p>
            <p>身体の違和感も、</p>
            <p>繰り返される人間関係のパターンも——</p>
          </div>

          <p className="font-serif text-deep text-xl md:text-2xl font-medium text-left my-12">
            全部、自分で読み解けるようになる。
          </p>

          <div className="space-y-4 text-left leading-loose">
            <p>それは、一生ものの技術です。</p>
            <p>そして、もし将来あなたが誰かを支える側になりたいと思った時、</p>
            <p>この技術は、そのまま、人を導く土台になります。</p>
          </div>
        </div>
      </section>

      {/* ==================== セクション5：メソッド紹介 ==================== */}
      <section className="px-6 py-24 md:py-32 bg-paper section-fade">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 04 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-8 leading-relaxed text-center">
            内観を技術にする、
            <br />
            4つのステップ
          </h2>

          <p className="text-center text-ink/80 leading-loose mb-20 max-w-xl mx-auto">
            この講座では、内観を再現可能な「技術」にするための4つのステップを、3ヶ月かけて体得していきます。
          </p>

          <div className="space-y-20">
            {[
              {
                num: "STEP 1",
                title: "「感じる」と「思考する」を、分離する",
                body: [
                  "ほとんどの人は、「感じている」と思っている瞬間に、実は「思考している」だけです。",
                  "頭で組み立てた言葉を、感情だと錯覚している。",
                  "この区別が体感レベルでつかない限り、内観はずっと「頭の作業」のままです。",
                  "逆に、ここがクリアになると、内観の質が一段深くなります。",
                ],
                emphasis: "すべての土台になる、最重要のステップです。",
              },
              {
                num: "STEP 2",
                title: "感情のメカニズムを、体で理解する",
                body: [
                  "感情は、エネルギーです。",
                  "感じきれば、約90秒で消えます。",
                  "これを「頭で知っている」のと、「体で理解している」のは、全く別物です。",
                  "体で理解した瞬間から、人は感情を怖がらなくなります。",
                ],
                emphasis: "「この感情を感じても、私は死なない」 ―― そう体が知ったとき、内観は一気に深くなります。",
              },
              {
                num: "STEP 3",
                title: "内観が止まる瞬間を、観察する",
                body: [
                  "ここからが、この講座の真骨頂です。",
                  "止まる瞬間に、何が起きているのか。",
                  "どの感情が出てきているのか。",
                  "どのアイデンティティが崩れそうになっているのか。",
                  "この「停止構造」を、自分で観察できるようになる。",
                  "止まった自分を責めるのではなく、止まった理由を読み解けるようになる。",
                ],
                emphasis: "ここを通過した人だけが、内観を技術と呼べるようになります。",
              },
              {
                num: "STEP 4",
                title: "止まる場所を抜けて、自力で潜り直す",
                body: [
                  "止まる構造がわかれば、抜ける方法もわかります。",
                  "感じたくなかった感情を、感じきる。",
                  "崩したくなかったアイデンティティを、手放す。",
                  "そして、もう一度、潜り直す。",
                  "このサイクルが体に染み込めば、あなたはもう、自分一人で、何度でも内観を深められます。",
                ],
                emphasis: "それが、「自分が自分のセラピストになる」ということです。",
              },
            ].map((step, i) => (
              <div key={i} className="border-l-2 border-gold/30 pl-8 md:pl-12">
                <p className="font-serif text-gold tracking-widest text-sm mb-3">{step.num}</p>
                <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  {step.title}
                </h3>
                <div className="space-y-4 leading-loose mb-6">
                  {step.body.map((line, j) => (
                    <p key={j} className="text-ink">{line}</p>
                  ))}
                </div>
                <p className="font-serif text-deep font-medium leading-relaxed">
                  {step.emphasis}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== セクション6：講座内容 ==================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 05 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-16 leading-relaxed text-center">
            3ヶ月で、
            <br />
            あなたが手にするもの
          </h2>

          {/* 01: 動画講義 */}
          <div className="mb-20">
            <p className="font-serif text-gold tracking-widest text-sm mb-3">01</p>
            <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              体系化された動画講義
            </h3>
            <div className="space-y-4 leading-loose mb-8">
              <p>感情入門講座の内容を、すべて含みます。</p>
              <p>そこに加えて、「内観の落とし込み」に特化した動画講義を新規収録。</p>
            </div>

            <p className="font-serif text-deep font-medium mb-4">感情講座の内容</p>
            <ul className="space-y-3 mb-8">
              {[
                "感情とは？感情を感じきる重要性について",
                "感情の役割について",
                "女性性と男性性の観点から感情が自分の内側で何が起きているのか図で解説",
                "私達は精子と卵子の統合でできたもの、つまり二面性で1セットであること、これが感情を感じる上で大事な要素であること",
                "トラウマができる仕組みを解説(これがわかればネガティブな感情を感じる事を恐れなくなります)",
                "人や場所を変え時を超えて同じ課題が繰り返される仕組み(これがわかれば自分で感情を思いきり感じる事ができます)",
                "感情を感じる事で勝手に美人になり、自愛が加速する仕組み(自分を愛するが心底わかる解説をします)",
                "波動を上げていく対話術(これだけでも実際一つの講座になる重要な内容です)",
                "全ての感情をジャッジしないワーク",
                "潜在意識にアクセスするためにまずは感情を感じること",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 leading-loose text-sm md:text-base">
                  <span className="text-gold flex-shrink-0 mt-1">—</span>
                  <span className="text-ink">{text}</span>
                </li>
              ))}
            </ul>

            <p className="font-serif text-deep font-medium mb-4">内観の落とし込み(新規収録)</p>
            <ul className="space-y-3 mb-8">
              {[
                "感情の正体と、代謝のメカニズム",
                "「感じる」と「思考する」の分離",
                "内観が止まる構造の解剖",
                "罪悪感・劣等感・無価値感との向き合い方",
                "アイデンティティが崩れる瞬間の通過方法",
                "自分一人で潜り直すための実践方法",
                "自己一致とは何か、どうやって自己一致し続けるのか",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 leading-loose text-sm md:text-base">
                  <span className="text-gold flex-shrink-0 mt-1">—</span>
                  <span className="text-ink">{text}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-ink/70 text-sm">
              <p>動画は順次公開。何度でも、好きなタイミングで見返せます。</p>
              <p className="italic">(動画の内容は変更・追加されることがあります。)</p>
            </div>
          </div>

          <div className="gold-divider"></div>

          {/* 02: 個別チャット */}
          <div className="my-20">
            <p className="font-serif text-gold tracking-widest text-sm mb-3">02</p>
            <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              個別チャットサポート
            </h3>
            <p className="leading-loose mb-6">
              3ヶ月間、私と直接やりとりできる個別チャット枠をご用意します。
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "自分の内観が合っているか、確認したい",
                "止まってしまった場所を、一緒に解剖してほしい",
                "出てきた感情の意味が、わからない",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 leading-loose">
                  <span className="text-gold flex-shrink-0 mt-1">—</span>
                  <span className="text-ink">{text}</span>
                </li>
              ))}
            </ul>
            <p className="leading-loose">そんなとき、いつでも私に質問できます。</p>
          </div>

          <div className="gold-divider"></div>

          {/* 03: 期間 */}
          <div className="mt-20">
            <p className="font-serif text-gold tracking-widest text-sm mb-3">03</p>
            <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              3ヶ月の伴走期間
            </h3>
            <div className="space-y-2 mb-8">
              <p className="leading-loose">開講：2026年6月1日</p>
              <p className="leading-loose">終了：2026年8月31日(予定)</p>
            </div>
            <p className="leading-loose">
              3ヶ月の間、動画を見て、ワークをして、質問して、また見直す。
              <br />
              このサイクルを、私と一緒に回し続けます。
            </p>
          </div>
        </div>
      </section>

      {/* ==================== セクション7：3ヶ月後の変化 ==================== */}
      <section className="px-6 py-24 md:py-32 bg-paper section-fade">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 06 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-20 leading-relaxed text-center">
            3ヶ月後、
            <br />
            あなたはこう変わります
          </h2>

          {/* Before */}
          <div className="mb-12">
            <p className="font-serif text-soft tracking-widest text-sm mb-6">これまで</p>
            <ul className="space-y-4">
              {[
                "内観しても、合っているか不安だった",
                "一人だと、すぐ手が止まった",
                "同じ場所で何度もループしていた",
                "占いや誰かに「答え」をもらいたくなっていた",
                "気づきはあっても、現実が動かなかった",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 leading-loose">
                  <span className="text-soft flex-shrink-0 mt-1">—</span>
                  <span className="text-soft">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 矢印 */}
          <div className="flex justify-center my-12">
            <div className="w-px h-16 bg-gold/60"></div>
          </div>

          {/* After */}
          <div className="mb-12">
            <p className="font-serif text-deep tracking-widest text-sm mb-6">3ヶ月後</p>
            <ul className="space-y-4">
              {[
                "自分の内観に、迷いがなくなる",
                "止まる瞬間も、自分で読み解けるようになる",
                "夢・身体の違和感・繰り返すパターンも、自力で意味を見出せる",
                "他人の答えを必要としなくなる",
                "気づきが、体感と現実の変化につながり始める",
                "潜在意識の設定変更ができるようになっている",
                "自己一致し続ける意味がわかり実践できるようになっている",
                "深く自分を愛する喜びを追求したくなる（勝手に引き寄せが起きるフェーズですね）",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 leading-loose">
                  <span className="text-gold flex-shrink-0 mt-1">—</span>
                  <span className="text-deep font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="gold-divider"></div>

          <p className="leading-loose mb-12 text-center">
            そしてもう一つ、長期的に手に入るもの。
          </p>

          <h3 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-12 text-center leading-relaxed">
            この技術は、一生もの。
          </h3>

          <div className="space-y-6 leading-loose">
            <p>3ヶ月で得た「内観の技術」は、講座が終わっても、あなたの中に残り続けます。</p>
            <p>10年後、20年後、新しい悩みが出てきたとき。</p>
            <p>人生のステージが変わったとき。</p>
            <p>新しい関係性に入ったとき。</p>
            <p>そのたびに、あなたはこの技術を取り出して、自分を導いていけます。</p>
          </div>

          <div className="my-12 py-8 border-y border-gold/20">
            <p className="font-serif text-deep text-lg md:text-xl font-medium text-center leading-relaxed">
              そしてもし将来、あなたが誰かを支える仕事に就きたいと思った時——
              <br />
              この技術は、そのまま、人を導く土台になります。
            </p>
          </div>

          <div className="space-y-4 leading-loose text-ink">
            <p>セラピスト、コーチ、カウンセラー、</p>
            <p>あるいは、ただ目の前の家族や友人を助けたいだけだとしても。</p>
            <p>自分を導けない人は、人を導けません。</p>
            <p>逆に、自分を導けるようになった人は、その瞬間から、誰かにとっての灯になれます。</p>
          </div>
        </div>
      </section>

      {/* ==================== セクション8：ストーリー ==================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 07 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-16 leading-relaxed text-center">
            私が、
            <br />
            この講座を作った理由
          </h2>

          {/* プロフィール写真プレースホルダー */}
          <div className="flex flex-col items-center mb-16">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.jpg"
              alt="なるいまい"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top mb-6 border border-gold/30"
            />
            <p className="font-serif text-mist tracking-widest text-sm">ブロック外しセラピスト</p>
            <p className="font-serif text-deep text-lg mt-2">なるいまい</p>
          </div>

          <div className="gold-divider"></div>

          <div className="space-y-6 leading-loose">
            <p>私自身、長い間、内観の中で止まり続けてきました。</p>
            <p>スピリチュアルも、心理学も、潜在意識も、片っ端から学びました。</p>
            <p>高額講座にも、何百万円と投資しました。</p>
            <p>それでも、ある場所で必ず止まる。</p>
            <p>止まるたびに、「私はまだ甘い」と自分を責めてきました。</p>
          </div>

          <div className="my-12 border-t border-line"></div>

          <div className="space-y-6 leading-loose">
            <p>転機は、一旦人生でちゃんとどん底を経験した時。</p>
            <p>感情が全ての起点になっていることを知りました。</p>
            <p>そして感情を観察し続けた先に「止まる場所には構造がある」と知ったんです。</p>
            <p>止まったのは、私が甘かったからじゃない。</p>
            <p>私の能力が低かったからでもない。</p>
          </div>

          <p className="font-serif text-deep text-xl md:text-2xl font-medium text-center my-12">
            構造を知らなかっただけ。
          </p>

          <div className="space-y-6 leading-loose">
            <p>そこから、私の内観は変わりました。</p>
            <p>止まる瞬間に、構造を観察できるようになった。</p>
            <p>止まる理由を、自分で言語化できるようになった。</p>
            <p>そして、自力で抜けて、もう一度潜れるようになった。</p>
          </div>

          <div className="my-12 border-t border-line"></div>

          <div className="space-y-6 leading-loose">
            <p>それから私は、この「内観の構造」を、ブロック外しセッションに活かしてきました。</p>
            <p>職業も年齢もバックグラウンドも違う人たちと向き合う中で、わかったことがあります。</p>
          </div>

          <p className="font-serif text-deep text-xl md:text-2xl font-medium text-center my-12">
            止まる場所の構造は、
            <br />
            人類共通でした。
          </p>

          <div className="space-y-6 leading-loose">
            <p>罪悪感・劣等感・無価値感。</p>
            <p>崩したくないアイデンティティ。</p>
            <p>これらが組み合わさって、内観の停止ポイントを作っている。</p>
            <p>そして、構造がわかれば、誰でも抜けられる。</p>
            <p>例外は、ありませんでした。</p>
          </div>

          <div className="my-12 border-t border-line"></div>

          <p className="leading-loose mb-8">私がこの講座を作ったのは、</p>

          <p className="font-serif text-deep text-lg md:text-xl font-medium leading-relaxed mb-12">
            「セッションを受け続けないと進めない」状態から、
            <br />
            一人でも多くの人を卒業させたいから。
          </p>

          <div className="space-y-6 leading-loose">
            <p>私のセッションは、これからも続けます。</p>
            <p>でも本音を言えば——</p>
            <p>私は、皆さんに、自分で自分の内側を直視、誰かに頼らずとも自分の感覚こそ全てって自信を持ってもらいたい。</p>
            <p>自分の内観を、自分で深められる人になってほしい。</p>
            <p>そして、いつか、誰かにとっての灯になってほしい。</p>
            <p>そのための講座を、ここに作りました。</p>
          </div>
        </div>
      </section>

      {/* ==================== セクション9：こんな方へ ==================== */}
      <section className="px-6 py-24 md:py-32 bg-paper section-fade">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 08 —</p>

          {/* こんな方のための */}
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-12 leading-relaxed text-center">
            こんな方のための講座です
          </h2>
          <ul className="space-y-5 mb-20">
            {[
              "内観を続けてきたが、同じ場所で止まる感覚がある方",
              "自分の感覚を、占いや他人の意見ではなく、自分で読めるようになりたい方",
              "ブロック外しを「受け続ける」のではなく、「自分で内側を直視できるようになりたい」方",
              "一生ものの技術として、内観を体に落とし込みたい方",
              "将来、自分の経験を活かして、誰かを支える側になりたい方",
              "Kindle書籍『ブロックを外し潜在意識を書き換える本物の内観』を読んで、「ここから先を深めたい」と感じた方",
              "潜在意識の設定変更をしたい方",
              "無理して頑張って稼ぐのに疲れた、恋愛も心から喜べない相手を選んでしまう。内側の何がズレているのかちゃんと自分で把握したいと自分の内側を直視する覚悟がある方",
            ].map((text, i) => (
              <li key={i} className="flex gap-4 leading-loose">
                <span className="text-gold flex-shrink-0 mt-1 font-bold">✓</span>
                <span className="text-ink">{text}</span>
              </li>
            ))}
          </ul>

          <div className="gold-divider"></div>

          {/* ご遠慮ください */}
          <h2 className="font-serif text-soft text-2xl md:text-3xl font-medium mb-12 mt-20 leading-relaxed text-center">
            こんな方はご遠慮ください
          </h2>
          <ul className="space-y-5">
            {[
              "「答えを誰かに教えてほしい」と他者依存したい方",
              "短期間で劇的な変化だけを期待する方",
              "自分のネガティブ感情に向き合う覚悟がまだ整っていない方",
              "個別チャットを「カウンセリング代わり」に使いたい方",
              "現在、精神科・心療内科で治療中の方（まずは心身の安定が最優先です）",
            ].map((text, i) => (
              <li key={i} className="flex gap-4 leading-loose">
                <span className="text-soft flex-shrink-0 mt-1">×</span>
                <span className="text-soft">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==================== セクション10：価格 ==================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 09 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-16 leading-relaxed text-center">
            本来、この内容を
            <br />
            網羅するには——
          </h2>

          <div className="space-y-4 leading-loose mb-16">
            <p>まず、お伝えしたいことがあります。</p>
            <p>私が3ヶ月かけてあなたに渡そうとしているもの。</p>
            <p>その全てを、世の中で個別に揃えようとすると、いくらかかるのか。</p>
            <p>正直に、計算してみました。</p>
          </div>

          {/* 価格内訳 */}
          <div className="space-y-12 mb-16">
            <div className="text-center">
              <p className="font-serif text-deep mb-4">私のVIPブロック外しセッション（3回コース）</p>
              <p className="font-serif text-3xl md:text-4xl font-medium text-gold mb-3">264,000円</p>
              <p className="text-sm text-ink/70">私が普段提供している、最も深いセッションです。（実際の価格です）</p>
            </div>

            <div className="border-t border-line"></div>

            <div className="text-center">
              <p className="font-serif text-deep mb-4">世の中で開催されている「潜在意識の書き換え講座」</p>
              <p className="font-serif text-3xl md:text-4xl font-medium text-gold mb-3">80万円 以上</p>
              <p className="text-sm text-ink/70">潜在意識の書き換えに特化した自己啓発系の講座は、相場としてこの価格帯です。</p>
            </div>

            <div className="border-t border-line"></div>

            <div className="text-center">
              <p className="font-serif text-deep mb-4">感情に特化した講座（単体）</p>
              <p className="font-serif text-3xl md:text-4xl font-medium text-gold mb-3">10万円 前後</p>
              <p className="text-sm text-ink/70">感情の代謝・扱い方を体系的に学べる講座は、これくらいの価格帯が一般的です。</p>
            </div>
          </div>

          <div className="gold-divider"></div>

          {/* 合計 */}
          <div className="text-center py-12 my-8">
            <p className="font-serif text-deep text-lg md:text-xl mb-6">単純に合算すると——</p>
            <p className="font-serif font-medium text-deep" style={{ fontSize: "clamp(40px, 9vw, 72px)" }}>
              1,164,000円
            </p>
            <p className="font-serif text-deep text-base md:text-lg mt-6 leading-relaxed">
              100万円を超える内容を、
              <br />
              この3ヶ月の講座にすべて詰め込みました。
            </p>
          </div>

          <div className="border-t border-line my-12"></div>

          {/* しかも */}
          <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-8 leading-relaxed text-center">
            しかも、それだけではありません。
          </h3>

          <div className="space-y-4 leading-loose mb-12">
            <p>世の中の高額講座の多くは、</p>
            <p>「動画を見て終わり」</p>
            <p>「講師と話すには別途料金」</p>
            <p>そんな仕組みになっています。</p>
            <p>でも、この講座は違います。</p>
          </div>

          <div className="space-y-4 mb-12">
            <p className="font-serif text-deep text-lg md:text-xl font-medium leading-relaxed">
              3ヶ月間、私と直接やりとりできる個別チャットサポート付き。
            </p>
            <p className="font-serif text-deep text-lg md:text-xl font-medium leading-relaxed">
              さらに0期生には、本来3回コースでしか提供していないブロック外しセッションを、1回分組み込みます。
            </p>
          </div>

          {/* セッション特典ボックス */}
          <div className="border-y-2 border-gold/40 py-12 px-6 my-16 bg-base">
            <h3 className="font-serif text-gold text-xl md:text-2xl font-medium mb-8 leading-relaxed text-center tracking-wide">
              ブロック外しセッション
              <br />
              1回分を特別に
            </h3>
            <div className="space-y-5 leading-loose">
              <p>私のブロック外しセッションは、</p>
              <p className="font-medium text-deep">
                普段は <span className="text-gold">3回コース（264,000円）</span> でのみ提供しています。
              </p>
              <p>単発でのお申し込みは、現在受け付けていません。</p>
              <p>そして今後も、単発での販売予定はありません。</p>
              <p>その「3回コースでしか手に入らないセッション」を、</p>
              <p>0期生のあなたには、1回分を特別に組み込みます。</p>
              <p className="pt-4 text-sm text-ink/80">
                講座開始後、サポート期間内、お好きなタイミングで個別セッションを受けていただけます。
                「自分のブロックを、なるいまいに直接見てほしい」
                そんなあなたを、一対一でサポートします。
              </p>
            </div>
          </div>

          <div className="gold-divider"></div>

          {/* 適正価格 */}
          <div className="text-center my-16">
            <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-8 leading-relaxed">
              適正価格は、198,000円。
            </h3>
            <div className="space-y-4 leading-loose text-left">
              <p>内容と価値を冷静に見積もれば、</p>
              <p className="font-serif text-deep font-medium">
                この講座の適正価格は、本来 198,000円 です。
              </p>
              <p>100万円相当の内容を、10万円台に圧縮した時点で、すでに破格です。</p>
              <p>でも——</p>
            </div>
          </div>

          <div className="gold-divider"></div>

          {/* 最終価格 */}
          <div className="text-center py-16">
            <h3 className="font-serif text-deep text-xl md:text-2xl font-medium mb-12 leading-relaxed">
              0期生のあなたには、
              <br />
              この価格でお渡しします。
            </h3>
            <p className="font-serif font-medium text-deep mb-2" style={{ fontSize: "clamp(48px, 11vw, 88px)" }}>
              149,000円
            </p>
            <p className="text-sm text-ink/70 tracking-widest">（税込）</p>
          </div>

          <div className="gold-divider"></div>

          {/* 募集人数 */}
          <div className="text-center mt-16 mb-8">
            <p className="number-label mb-6">— 募集人数 —</p>
            <p className="font-serif font-medium text-deep mb-8" style={{ fontSize: "clamp(36px, 8vw, 56px)" }}>
              先着 5名
            </p>
            <div className="space-y-2 leading-loose">
              <p>0期生として、私と密度高くやりとりできる人数を、5名に限定します。</p>
              <p>埋まり次第、募集を終了します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== セクション11：正直な約束 ==================== */}
      <section className="px-6 py-24 md:py-32 bg-paper section-fade">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 10 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-16 leading-relaxed text-center">
            なぜ、この価格にしたのか。
          </h2>

          <div className="gold-line-left">
            <div className="space-y-6 leading-loose">
              <p>正直にお話しします。</p>
              <p>198,000円が適正だとわかっていて、なぜ149,000円にしたのか。</p>
              <p>それは、0期生のあなたを——</p>
            </div>

            <p className="font-serif text-deep text-lg md:text-xl font-medium my-10 leading-relaxed">
              「お客様」ではなく、「仲間」として迎えたいからです。
            </p>

            <div className="border-t border-line my-12"></div>

            <div className="space-y-6 leading-loose">
              <p>この講座は、私にとっても初めての公開講座です。</p>
              <p>完成された教材を一方的にお渡しする講座では、ありません。</p>
              <p>動画コンテンツの一部は、0期生の皆さまの質問や歩みに合わせて、講座期間中に追加・更新していきます。</p>
              <p>あなたが「ここがわからない」と言ってくれた瞬間に、私はそれを動画にして、講座に加えていく。</p>
              <p>つまりこの講座は——</p>
            </div>

            <p className="font-serif text-deep text-lg md:text-xl font-medium my-10 leading-relaxed">
              0期生のあなたと一緒に、
              <br />
              私のメソッドを完成させていく場です。
            </p>

            <div className="border-t border-line my-12"></div>

            <div className="space-y-6 leading-loose">
              <p>期間は3ヶ月とお約束しますが、必要に応じて延長することもあります。</p>
              <p>私自身も、やりながら、最善の形を探っていきます。</p>
              <p>その分、価格は0期生だけの特別価格に設定しました。</p>
              <p>ブロック外しセッションを組み込めるのも、0期生限りの特典です。</p>
              <p>次期以降は、価格は198,000円に戻し、ブロック外しセッションの特典も外れる予定です。</p>
            </div>

            <div className="border-t border-line my-12"></div>

            <div className="space-y-6 leading-loose">
              <p>私は、この講座を、私の人生で最も大切なメソッドにしたいと思っています。</p>
              <p>そのための「最初のメンバー」を、ここで募集します。</p>
              <p>「完成品」を待つのではなく、「最前線」を一緒に歩いてくれる人を。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== セクション12：FAQ ==================== */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-2xl mx-auto">
          <p className="number-label mb-6 text-center">— 11 —</p>
          <h2 className="font-serif text-deep text-2xl md:text-3xl font-medium mb-16 leading-relaxed text-center">
            よくあるご質問
          </h2>

          <div className="space-y-12">
            {[
              {
                q: "動画はいつまで見られますか？",
                a: "3ヶ月の講座期間中は、いつでも何度でも視聴いただけます。終了後の視聴期間については、0期生の皆さまには別途ご案内します。",
              },
              {
                q: "個別チャットは、どのくらいの頻度で送っていいですか？",
                a: "頻度の上限は設けていません。ただし、私からの返信は内容に応じて1〜2営業日いただくことがあります。質問の内容や深さに合わせて、丁寧にお返事します。",
              },
              {
                q: "感情入門講座をすでに受けた人は、内容が重複しませんか？",
                a: "動画講義のうち、感情入門講座の内容部分は重複しますが、動画は全く別物です。感情入門講座の動画をそのままシェアすることはありません。講座を運営し、お客様が躓くポイントを理解したので、バージョンアップし作り直しました。さらに、その先の「内観の落とし込み」セクションは新規収録です。",
              },
              {
                q: "Kindle書籍『ブロックを外し潜在意識を書き換える本物の内観』を読んでいなくても大丈夫ですか？",
                a: "はい、大丈夫です。ただし、Kindle書籍を読んでから受講いただくと、講座の理解がより深まります。受講前にお読みいただくことをおすすめします。",
              },
              {
                q: "ブロック外しセッションは、いつ受けられますか？",
                a: "講座開始以降、ご都合の良いタイミングで日程を調整します。3ヶ月の講座期間内であれば、いつでも受けていただけます。",
              },
              {
                q: "講座が延長になる可能性があるとのことですが、追加費用は発生しますか？",
                a: "いいえ、延長になった場合も追加費用は一切発生しません。私の判断で必要と感じた場合のみ、無償で延長します。",
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-gold/30 pl-6 md:pl-8">
                <p className="font-serif text-deep font-medium mb-4 leading-relaxed">
                  <span className="text-gold mr-2">Q.</span>
                  {item.q}
                </p>
                <p className="leading-loose text-ink">
                  <span className="text-gold mr-2">A.</span>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== セクション13：最終CTA ==================== */}
      <section id="apply" className="px-6 py-24 md:py-32 bg-paper section-fade">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-deep font-medium mb-16 leading-relaxed" style={{ fontSize: "clamp(28px, 6vw, 44px)" }}>
            あなたの感覚は、
            <br />
            あなただけのものです。
          </h2>

          <div className="space-y-6 leading-loose mb-12 text-left">
            <p>誰かに答えをもらうのは、もう、終わりにしませんか。</p>
            <p>止まる場所には、構造がある。</p>
            <p>構造を知れば、抜けられる。</p>
            <p>そして、抜けられる自分を知れば——</p>
          </div>

          <p className="font-serif text-deep text-xl md:text-2xl font-medium my-16 leading-relaxed">
            もう、自分の感覚に
            <br />
            嘘をつかなくていい。
          </p>

          <div className="gold-divider"></div>

          <div className="space-y-4 leading-loose my-12">
            <p>3ヶ月後、</p>
            <p className="font-serif text-deep font-medium">
              「自分の感覚に迷わない、むしろ寄り添える自分」
            </p>
            <p>として歩いていくあなたを、私は0期生として、全力でサポートします。</p>
          </div>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-block bg-terracotta text-paper px-16 py-5 rounded-sm font-medium tracking-widest hover:bg-terracottaDark text-lg md:text-xl my-12"
          >
            0期生に申し込む
          </a>

          <div className="text-sm text-ink/80 space-y-2 mt-8">
            <p>先着5名 / ブロック外しセッション1回分付き / 149,000円（税込）</p>
          </div>

          <div className="gold-divider"></div>

          <div className="text-sm text-soft space-y-2 mt-12">
            <p>ご質問・ご相談はメルマガからの返信または直接こちらへどうぞ</p>
            <p className="font-mono text-ink/80">info@narui.my</p>
          </div>
        </div>
      </section>

      {/* ==================== フッター ==================== */}
      <footer className="px-6 py-12 border-t border-line">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-deep tracking-widest text-sm mb-2">なるいまい</p>
          <p className="text-xs text-soft">ブロック外しセラピスト</p>
          <p className="text-xs text-soft mt-6">© 2026 Narui My. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
