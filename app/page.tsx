const APPLY_URL = "https://forms.gle/KoC25Gw3dQ23xRes8";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EmpathySection />
      <ProblemSection />
      <SolutionSection />
      <MethodSection />
      <CourseSection />
      <ChangeSection />
      <ProfileSection />
      <PriceSection />
      <BonusSection />
      <FaqSection />
      <FinalCtaSection />
      <PageFooter />
    </main>
  );
}

/* ===== Section 1: Hero ===== */
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "6rem 1.5rem",
      }}
    >
      {/* 波紋 SVG 背景 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <radialGradient id="lake" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1B3A57" />
              <stop offset="100%" stopColor="#FBFAF7" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="400" r="300" fill="url(#lake)" />
          {[50, 90, 130, 170, 210, 250, 290, 330].map((r) => (
            <circle
              key={r}
              cx="400"
              cy="400"
              r={r}
              fill="none"
              stroke="#1B3A57"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      <div
        className="container text-center"
        style={{ position: "relative", zIndex: 10 }}
      >
        <p className="number-label mb-12">— 0期生プログラム —</p>

        <h1 className="hero-title font-medium mb-10">
          もう、自分の感覚に
          <br />
          嘘をつかない。
        </h1>

        <p
          className="hero-sub mb-12"
          style={{ opacity: 0.8, lineHeight: 1.9, color: "var(--ink)" }}
        >
          自己一致し、
          <br />
          内観を一生使える技術にする3ヶ月。
        </p>

        <div className="gold-divider"></div>

        <p
          className="font-serif tracking-widest mb-12 text-center"
          style={{ color: "var(--mist)", lineHeight: 2 }}
        >
          ブロック外しセラピスト
          <br />
          <span style={{ color: "var(--deep)" }}>なるいまい</span>
        </p>

        <a href="#section2" className="cta-button">
          詳細を見る
        </a>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "3rem",
            background: "rgba(184, 149, 106, 0.4)",
            margin: "0 auto",
          }}
        ></div>
      </div>
    </section>
  );
}

/* ===== Section 2: 01 共感 ===== */
function EmpathySection() {
  return (
    <section id="section2">
      <div className="container reveal">
        <p className="number-label mb-6">— 01 —</p>
        <h2 className="section-h2 font-medium mb-12">
          こんな状態の自分に、
          <br />
          心当たりはありませんか。
        </h2>

        <ul className="dash-list mb-16">
          <li>
            内観のやり方はわかってきた。でも一人でやると「これで合ってるのかな」が消えない
          </li>
          <li>ワークをやって、気づきもあった。なのに、体感が変わらない</li>
          <li>ブロックを見つけたところで、なぜか先に進めない瞬間がある</li>
          <li>何度内観しても、同じ場所で止まる気がする</li>
          <li>
            内観しても、結局、身体の奥の不安が消えないし現実変わらない
          </li>
        </ul>

        <div style={{ lineHeight: 1.9, color: "rgba(44, 62, 80, 0.8)", marginBottom: "2rem" }}>
          <p style={{ marginBottom: "1rem" }}>もしひとつでも当てはまるなら、</p>
          <p>これは「あなたの能力不足」が原因ではありません。</p>
        </div>

        <div className="gold-divider"></div>

        <p className="font-serif strong-line text-center font-medium" style={{ lineHeight: 1.7 }}>
          内観には、必ず止まる場所があります。
        </p>
        <p className="text-center mt-4" style={{ color: "rgba(44, 62, 80, 0.7)" }}>
          そして、止まる場所には理由があります。
        </p>
      </div>
    </section>
  );
}

/* ===== Section 3: 02 問題提起 ===== */
function ProblemSection() {
  return (
    <section id="section3" style={{ background: "var(--paper)" }}>
      <div className="container reveal">
        <p className="number-label mb-6">— 02 —</p>
        <h2 className="section-h2 font-medium mb-16">
          なぜ、内観は
          <br />
          途中で止まるのか。
        </h2>

        <p style={{ lineHeight: 1.9, marginBottom: "2rem" }}>
          内観をしていると、ある瞬間に、ふっと意識が逸れることがあります。
        </p>

        <div className="quote-block">
          <p>「あ、今日はもうやめておこう」</p>
          <p>「なんだか疲れたな」</p>
          <p>「これ以上潜っても、たぶん何も出ない」</p>
        </div>

        <p style={{ lineHeight: 1.9, marginBottom: "1rem" }}>
          そう思って、ノートを閉じる。
        </p>
        <p style={{ lineHeight: 1.9, marginBottom: "3rem" }}>
          でも、本当は——
        </p>

        <p
          className="font-serif strong-line text-center font-medium my-16"
          style={{ lineHeight: 1.7 }}
        >
          そこに、感じたくない何かが
          <br />
          あったから止まった。
        </p>

        {/* 図解：内観が止まる構造 */}
        <div className="structure-box">
          <p className="label">内観が止まる構造</p>
          <div className="structure-item">表層の悩み</div>
          <div className="structure-arrow">▼</div>
          <div className="structure-item">内観で見えた気づき</div>
          <div className="structure-arrow">▼</div>
          <div className="structure-item strong">ここで止まる ← 感じたくない感情</div>
          <div className="structure-arrow">▼</div>
          <div className="structure-item">罪悪感 / 劣等感 / 無価値感</div>
          <div className="structure-arrow">▼</div>
          <div className="structure-item">崩したくないアイデンティティ</div>
          <div className="structure-arrow">▼</div>
          <div className="structure-item">本当の根源</div>
        </div>

        <div style={{ lineHeight: 1.9 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            内観が止まる瞬間、その奥には必ず「感じたくない感情」があります。
          </p>
          <p
            className="font-serif font-medium"
            style={{ fontSize: "1.125rem", marginBottom: "1.5rem", color: "var(--deep)" }}
          >
            それは多くの場合、罪悪感・劣等感・無価値感——
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            人が「生きていけなくなる」と無意識に判断する、生存に関わる感情です。
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            そして、その感情の奥にはもう一つあります。
          </p>
          <p
            className="font-serif font-medium"
            style={{ fontSize: "1.125rem", color: "var(--deep)" }}
          >
            「崩したくないアイデンティティ」。
          </p>
        </div>

        <div className="quote-block quote-block-mist">
          <p>「いい娘でいる私」</p>
          <p>「強くあらねばならない私」</p>
          <p>「人に迷惑をかけない私」</p>
          <p>「ちゃんとしている私」</p>
        </div>

        <div style={{ lineHeight: 1.9 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            このアイデンティティが崩れることを、私たちは「死」と同じくらい怖がります。
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            だから内観は、その手前で必ず止まる。
          </p>
          <p>そして止まった自分を、人は責めます。</p>
        </div>

        <div className="quote-block quote-block-mist">
          <p>「私はまだ甘い」</p>
          <p>「やっぱり私には無理だ」</p>
          <p>「みんなはできているのに」</p>
        </div>

        <p style={{ lineHeight: 1.9, marginBottom: "3rem" }}>
          ——でも、違うんです。
        </p>

        <div
          style={{
            textAlign: "center",
            padding: "3rem 0",
            borderTop: "1px solid rgba(184, 149, 106, 0.2)",
            borderBottom: "1px solid rgba(184, 149, 106, 0.2)",
          }}
        >
          <p
            className="font-serif section-h2-big font-medium mb-6"
            style={{ lineHeight: 1.6, color: "var(--deep)" }}
          >
            止まったのではなく、
            <br />
            止められていた。
          </p>
          <p style={{ color: "rgba(44, 62, 80, 0.8)", marginBottom: "0.5rem" }}>
            止めていた構造を知らなかっただけ。
          </p>
          <p style={{ color: "rgba(44, 62, 80, 0.8)" }}>
            それを知れば、誰でも、その先へ潜れます。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 4: 03 解決の方向性 ===== */
function SolutionSection() {
  return (
    <section id="section4">
      <div className="container reveal text-center">
        <p className="number-label mb-6">— 03 —</p>
        <h2 className="section-h2-big font-medium mb-16">
          内観を、
          <br />
          「技術」にする。
        </h2>

        <div style={{ textAlign: "left", lineHeight: 1.9, marginBottom: "3rem" }}>
          <p style={{ marginBottom: "1rem" }}>内観は、才能ではありません。</p>
          <p>スピリチュアルな感性でもありません。</p>
        </div>

        <p
          className="font-serif strong-line font-medium my-16"
          style={{ lineHeight: 1.7 }}
        >
          構造を理解すれば、
          <br />
          誰でも、何度でも、再現できる。
        </p>

        <p className="mb-12" style={{ color: "rgba(44, 62, 80, 0.8)" }}>
          これが、私が3年以上かけてたどり着いた結論です。
        </p>

        <div className="gold-divider"></div>

        <div style={{ textAlign: "left", lineHeight: 1.9, marginBottom: "3rem" }}>
          <p style={{ marginBottom: "1rem" }}>止まる場所には、パターンがあります。</p>
          <p style={{ marginBottom: "1rem" }}>
            その手前で出てくる感情にも、パターンがあります。
          </p>
          <p>崩れそうになるアイデンティティにも、パターンがあります。</p>
        </div>

        <p style={{ textAlign: "left", lineHeight: 1.9, marginBottom: "1rem" }}>
          このパターンを知り、構造として体に落とし込めば——
        </p>

        <p
          className="font-serif strong-line font-medium text-left my-12"
        >
          もう、内観で迷うことはありません。
        </p>

        <div style={{ textAlign: "left", lineHeight: 1.9, marginBottom: "3rem" }}>
          <p style={{ marginBottom: "1rem" }}>占いに頼らなくていい。</p>
          <p>「これで合ってますか？」と誰かに聞かなくていい。</p>
        </div>

        <div style={{ textAlign: "left", color: "rgba(44, 62, 80, 0.8)", marginBottom: "3rem" }}>
          <p style={{ marginBottom: "0.5rem" }}>夢の意味も、</p>
          <p style={{ marginBottom: "0.5rem" }}>身体の違和感も、</p>
          <p>繰り返される人間関係のパターンも——</p>
        </div>

        <p
          className="font-serif strong-line font-medium text-left my-12"
        >
          全部、自分で読み解けるようになる。
        </p>

        <div style={{ textAlign: "left", lineHeight: 1.9 }}>
          <p style={{ marginBottom: "1rem" }}>それは、一生ものの技術です。</p>
          <p style={{ marginBottom: "1rem" }}>
            そして、もし将来あなたが誰かを支える側になりたいと思った時、
          </p>
          <p>この技術は、そのまま、人を導く土台になります。</p>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 5: 04 メソッド紹介 ===== */
function MethodSection() {
  return (
    <section id="section5" style={{ background: "var(--paper)" }}>
      <div className="container reveal">
        <p className="number-label mb-6 text-center">— 04 —</p>
        <h2 className="section-h2 font-medium mb-8 text-center">
          内観を技術にする、
          <br />
          4つのステップ
        </h2>

        <p
          className="text-center mb-20"
          style={{
            color: "rgba(44, 62, 80, 0.8)",
            lineHeight: 1.9,
            maxWidth: "540px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          この講座では、内観を再現可能な「技術」にするための4つのステップを、3ヶ月かけて体得していきます。
        </p>

        <div>
          <div className="step-block">
            <p className="step-label">STEP 1</p>
            <h3 className="step-title">「感じる」と「思考する」を、分離する</h3>
            <div className="step-body">
              <p>ほとんどの人は、「感じている」と思っている瞬間に、実は「思考している」だけです。</p>
              <p>頭で組み立てた言葉を、感情だと錯覚している。</p>
              <p>この区別が体感レベルでつかない限り、内観はずっと「頭の作業」のままです。</p>
              <p>逆に、ここがクリアになると、内観の質が一段深くなります。</p>
            </div>
            <p className="step-emphasis">すべての土台になる、最重要のステップです。</p>
          </div>

          <div className="step-block">
            <p className="step-label">STEP 2</p>
            <h3 className="step-title">感情のメカニズムを、体で理解する</h3>
            <div className="step-body">
              <p>感情は、エネルギーです。</p>
              <p>感じきれば、約90秒で消えます。</p>
              <p>これを「頭で知っている」のと、「体で理解している」のは、全く別物です。</p>
              <p>体で理解した瞬間から、人は感情を怖がらなくなります。</p>
            </div>
            <p className="step-emphasis">
              「この感情を感じても、私は死なない」 ―― そう体が知ったとき、内観は一気に深くなります。
            </p>
          </div>

          <div className="step-block">
            <p className="step-label">STEP 3</p>
            <h3 className="step-title">内観が止まる瞬間を、観察する</h3>
            <div className="step-body">
              <p>ここからが、この講座の真骨頂です。</p>
              <p>止まる瞬間に、何が起きているのか。</p>
              <p>どの感情が出てきているのか。</p>
              <p>どのアイデンティティが崩れそうになっているのか。</p>
              <p>この「停止構造」を、自分で観察できるようになる。</p>
              <p>止まった自分を責めるのではなく、止まった理由を読み解けるようになる。</p>
            </div>
            <p className="step-emphasis">
              ここを通過した人だけが、内観を技術と呼べるようになります。
            </p>
          </div>

          <div className="step-block" style={{ marginBottom: 0 }}>
            <p className="step-label">STEP 4</p>
            <h3 className="step-title">止まる場所を抜けて、自力で潜り直す</h3>
            <div className="step-body">
              <p>止まる構造がわかれば、抜ける方法もわかります。</p>
              <p>感じたくなかった感情を、感じきる。</p>
              <p>崩したくなかったアイデンティティを、手放す。</p>
              <p>そして、もう一度、潜り直す。</p>
              <p>
                このサイクルが体に染み込めば、あなたはもう、自分一人で、何度でも内観を深められます。
              </p>
            </div>
            <p className="step-emphasis">
              それが、「自分が自分のセラピストになる」ということです。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 6: 05 講座内容 ===== */
function CourseSection() {
  const items = [
    {
      icon: "○",
      title: "グループセッション × 3回（各120分 / Zoom）",
      desc: "月1回のペースで開催。ライブで質問・対話しながら、知識を体感レベルへ落とし込みます。",
    },
    {
      icon: "○",
      title: "週次セルフワーク課題（フィードバック付き）",
      desc: "毎週テーマにそったワークに取り組み、なるいまいからコメントをもらいながら実践を深めます。",
    },
    {
      icon: "○",
      title: "Slackサポート（平日応答）",
      desc: "「今これが起きてる」をリアルタイムで持ち込めます。詰まった瞬間に一人で抱えなくていい環境。",
    },
    {
      icon: "○",
      title: "修了後フォローアップ（1on1 / 60分）",
      desc: "3ヶ月後の変化を一緒に振り返り、次のステップを確認します。",
    },
  ];

  return (
    <section id="section6">
      <div className="container reveal">
        <p className="number-label mb-6 text-center">— 05 —</p>
        <h2 className="section-h2 font-medium mb-6 text-center">
          3ヶ月で、何をするのか。
        </h2>
        <p
          className="text-center mb-16"
          style={{ color: "rgba(44, 62, 80, 0.7)", lineHeight: 1.9 }}
        >
          知識を「わかった」で終わらせず、体に落とし込むための4つの柱。
        </p>

        <div>
          {items.map((item) => (
            <div className="course-item" key={item.title}>
              <span className="course-item__icon">{item.icon}</span>
              <div className="course-item__text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 7: 06 受講後の変化 ===== */
function ChangeSection() {
  const changes = [
    {
      num: "01",
      title: "一人で、深く潜れるようになる",
      desc: "「これで合ってるのかな」が消える。自分の内観を自分で信頼できるようになります。",
    },
    {
      num: "02",
      title: "止まった自分を、責めなくなる",
      desc: "止まる理由がわかれば、責める必要がない。止まった場所を読み解く視点が生まれます。",
    },
    {
      num: "03",
      title: "感情に飲まれるのではなく、観察できる",
      desc: "感情はエネルギー。感じきれる自分になると、感情との関係が根本から変わります。",
    },
    {
      num: "04",
      title: "身体の声を、信頼して読み解ける",
      desc: "身体の違和感、夢のメッセージ、繰り返すパターン——すべてが自分を読み解く手がかりになります。",
    },
    {
      num: "05",
      title: "「本当にそうしたいのか」がわかる",
      desc: "他人の期待や「べき」に気づき、自分にとっての本音を、自分で選べるようになります。",
    },
  ];

  return (
    <section id="section7" style={{ background: "var(--paper)" }}>
      <div className="container reveal">
        <p className="number-label mb-6 text-center">— 06 —</p>
        <h2 className="section-h2 font-medium mb-6 text-center">
          3ヶ月後、
          <br />
          あなたはこう変わる。
        </h2>
        <p
          className="text-center mb-16"
          style={{ color: "rgba(44, 62, 80, 0.7)", lineHeight: 1.9 }}
        >
          技術として体得した内観は、日常のあらゆる場面で機能します。
        </p>

        <div>
          {changes.map((c) => (
            <div className="change-item" key={c.num}>
              <span className="change-item__number">{c.num}</span>
              <div className="change-item__text">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 8: 07 講師プロフィール ===== */
function ProfileSection() {
  return (
    <section id="section8">
      <div className="container reveal">
        <p className="number-label mb-6 text-center">— 07 —</p>
        <h2 className="section-h2 font-medium mb-16 text-center">
          なるいまい について
        </h2>

        {/* プロフィール写真 */}
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="なるいまい"
            className="profile-photo"
          />
          <p
            className="font-serif font-medium"
            style={{ fontSize: "1.25rem", color: "var(--deep)", marginBottom: "0.5rem" }}
          >
            なるいまい
          </p>
          <p style={{ color: "var(--mist)", letterSpacing: "0.1em", fontSize: "0.875rem" }}>
            ブロック外しセラピスト
          </p>
        </div>

        <div className="gold-divider"></div>

        <div style={{ lineHeight: 1.9 }}>
          <p style={{ marginBottom: "1.5rem" }}>
            3年以上にわたって自分自身の内観と向き合い続けた経験をもとに、現在はブロック外しセラピストとして個人セッションを展開。
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            感情の構造を論理的に紐解き、「止まる場所」を安全に抜け出すサポートを得意とする。
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            「内観は才能ではなく、技術だ」という確信のもと、誰でも自力で深く潜れるようになる地図を渡したいと考えている。
          </p>
          <p>
            0期生プログラムでは、少人数の環境で、学んだことを一生使える技術として体得できる場を提供します。
          </p>
        </div>

        <div className="quote-block" style={{ marginTop: "3rem" }}>
          <p>
            自分の感覚を信じられるようになった瞬間から、人は変わります。
          </p>
          <p>
            その瞬間を、一緒につくりたい。
          </p>
        </div>
      </div>
    </section>
  );
}

/* ===== Section 9: 08 価格 ===== */
function PriceSection() {
  return (
    <section id="section9" style={{ background: "var(--paper)" }}>
      <div className="container reveal text-center">
        <p className="number-label mb-6">— 08 —</p>
        <h2 className="section-h2 font-medium mb-6">
          0期生 特別価格
        </h2>
        <p style={{ color: "rgba(44, 62, 80, 0.7)", lineHeight: 1.9, marginBottom: "3rem" }}>
          0期生は、正式ローンチ前のモニター価格での提供です。
          <br />
          次期以降は価格改定予定です。
        </p>

        <div className="price-box">
          <p className="price-label">0期生モニター価格（税込）</p>
          {/* TODO: 価格が決まったら更新する */}
          <p className="price-amount">¥ ──,─── 円</p>
          <p className="price-note">
            ※ 分割払い相談可
            <br />
            ※ 正式価格は近日公開
          </p>
        </div>

        <a href={APPLY_URL} className="cta-button">
          申し込む
        </a>
        <p className="mt-4" style={{ color: "var(--soft)", fontSize: "0.8125rem" }}>
          ※ 申し込みフォームに移動します
        </p>
      </div>
    </section>
  );
}

/* ===== Section 10: 09 特典 ===== */
function BonusSection() {
  const bonuses = [
    {
      label: "0期生特典 01",
      title: "修了後フォローアップ個別セッション（60分）",
      desc: "3ヶ月の変化を振り返り、次のステップを一緒に確認する1on1セッション。",
    },
    {
      label: "0期生特典 02",
      title: "内観ノート PDFテンプレート",
      desc: "なるいまいが実際に使っている内観ノートのフォーマット。セッション間の日常実践に使えます。",
    },
    {
      label: "0期生特典 03",
      title: "プライベートSlackコミュニティへの招待",
      desc: "受講中・修了後も継続してつながれる場。同期の存在が、内観の継続を支えます。",
    },
  ];

  return (
    <section id="section10">
      <div className="container reveal">
        <p className="number-label mb-6 text-center">— 09 —</p>
        <h2 className="section-h2 font-medium mb-6 text-center">
          0期生への贈りもの
        </h2>
        <p
          className="text-center mb-16"
          style={{ color: "rgba(44, 62, 80, 0.7)", lineHeight: 1.9 }}
        >
          最初の0期生だからこそ用意できる、特別な3つの特典。
        </p>

        <div>
          {bonuses.map((b) => (
            <div className="bonus-item" key={b.label}>
              <p className="bonus-label">{b.label}</p>
              <p className="bonus-title">{b.title}</p>
              <p className="bonus-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 11: 10 FAQ ===== */
function FaqSection() {
  const faqs = [
    {
      q: "内観の経験がなくても参加できますか？",
      a: "はい、参加できます。ただし、なんらかの形でセルフワークや内省に取り組んだことがある方が、より深く学べます。まったくの初心者の方はまずご相談ください。",
    },
    {
      q: "グループセッションはリアルタイム参加が必要ですか？",
      a: "原則、リアルタイムでの参加をお願いしています。録画はお渡ししますが、インタラクションが学習の核心になるため、できる限りリアルタイムでのご参加をおすすめします。",
    },
    {
      q: "セッションはどこで行われますか？",
      a: "Zoomを使用したオンラインセッションです。日本全国どこからでも参加できます。",
    },
    {
      q: "定員は何名ですか？",
      a: "0期生は少人数制（定員6名）です。深いフィードバックができる環境を確保するため、少数精鋭での開催となります。",
    },
    {
      q: "申し込み後のキャンセルはできますか？",
      a: "お申し込み後7日以内であれば全額返金いたします。それ以降のキャンセルは原則お受けできません。詳細は申し込みフォームにてご確認ください。",
    },
  ];

  return (
    <section id="section11" style={{ background: "var(--paper)" }}>
      <div className="container reveal">
        <p className="number-label mb-6 text-center">— 10 —</p>
        <h2 className="section-h2 font-medium mb-16 text-center">
          よくある質問
        </h2>

        <div>
          {faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <p className="faq-q">{f.q}</p>
              <p className="faq-a">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Section 12: 11 最終CTA ===== */
function FinalCtaSection() {
  return (
    <section
      id="section12"
      style={{
        background: "var(--deep)",
        padding: "8rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p
          className="number-label mb-6"
          style={{ color: "rgba(184, 149, 106, 0.8)" }}
        >
          — 11 —
        </p>
        <h2
          className="section-h2-big font-medium mb-12"
          style={{ color: "var(--paper)" }}
        >
          もう、止まらない。
        </h2>

        <p
          className="mb-6"
          style={{ color: "rgba(250, 247, 242, 0.75)", lineHeight: 1.9 }}
        >
          自分の感覚を信じて、深く潜れるようになる。
          <br />
          0期生は少人数制、定員6名です。
        </p>

        <div className="gold-divider" style={{ margin: "3rem auto" }}></div>

        <p
          className="font-serif font-medium mb-12"
          style={{
            color: "rgba(250, 247, 242, 0.9)",
            fontSize: "1.125rem",
            lineHeight: 1.9,
          }}
        >
          あなたの内観を、技術にする。
          <br />
          その3ヶ月を、一緒に歩きましょう。
        </p>

        <a
          href={APPLY_URL}
          className="cta-button"
          style={{ fontSize: "1.0625rem", padding: "1.25rem 4rem" }}
        >
          申し込む
        </a>

        <p className="mt-6" style={{ color: "rgba(250, 247, 242, 0.4)", fontSize: "0.8125rem" }}>
          ※ 申し込みフォームに移動します
        </p>
      </div>
    </section>
  );
}

/* ===== Footer ===== */
function PageFooter() {
  return (
    <footer>
      <p
        className="font-serif tracking-widest mb-3"
        style={{ color: "var(--mist)", fontSize: "0.875rem" }}
      >
        内観講座 0期生
      </p>
      <p style={{ color: "var(--soft)", fontSize: "0.8125rem" }}>
        © 2026 なるいまい　All Rights Reserved.
      </p>
    </footer>
  );
}
