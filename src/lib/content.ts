export type TraditionEntry = {
  tradition: string;
  facts: string;
  interpretation: string;
};

export type QuestionContent = {
  slug: string;
  intro: string;
  traditions: TraditionEntry[];
};

export const content: Record<string, QuestionContent> = {
  meaning: {
    slug: "meaning",
    intro:
      "Why are we here at all? Some traditions locate meaning in a relationship with the divine, others in the practice of living well itself, and others suggest the question is built on a misunderstanding of what a 'self' even is.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Human life is understood as created intentionally by God, with purpose found in relationship with God, love of neighbor, and participation in God's redemptive plan for creation.",
        interpretation:
          "Scholars often note that this framework locates meaning outside the individual — in being known and loved by a creator — rather than in something the person constructs alone.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Traditional teaching holds that clinging to a fixed sense of inherent meaning or a permanent self is itself a source of suffering. Purpose is instead found in the practice of the Eightfold Path toward liberation from that suffering.",
        interpretation:
          "This is often described by scholars as a deliberately anti-essentialist stance: rather than answering 'why are we here,' Buddhism questions the assumptions embedded in the question.",
      },
      {
        tradition: "Islam",
        facts:
          "The Quran states that humanity was created to worship and know God, and to act as stewards (khalifah) of the earth, accountable for their conduct.",
        interpretation:
          "Scholars frequently characterize this as a covenantal view of meaning: purpose is inseparable from responsibility, both to God and to the created world.",
      },
      {
        tradition: "Judaism",
        facts:
          "Rather than a single doctrinal answer, meaning is commonly located in covenant, in the practice of mitzvot (commandments), and in tikkun olam — repairing and improving the world through ethical action.",
        interpretation:
          "Many scholars point to this as characteristic of Judaism more broadly: meaning is enacted through practice and communal obligation rather than settled by abstract doctrine.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Stoic philosophy holds that meaning is found in living in accordance with nature and reason, and in the cultivation of virtue — the only true good — regardless of external circumstances.",
        interpretation:
          "This is often read by scholars as relocating meaning entirely within the individual's own judgments and choices, since virtue is treated as the one thing fully within a person's control.",
      },
      {
        tradition: "Hinduism",
        facts:
          "Meaning is commonly framed around fulfilling one's dharma (duty, appropriate to one's stage of life and role), pursued alongside the aims of artha (prosperity) and kama (pleasure), with moksha — liberation from the cycle of rebirth — as the ultimate goal beyond them.",
        interpretation:
          "Scholars often describe this as a layered view of meaning: worldly duties and pleasures are treated as legitimate in their own right, not as obstacles, while still nested within a further, transcendent goal.",
      },
      {
        tradition: "Confucianism",
        facts:
          "Meaning is found in cultivating virtue and properly fulfilling one's role within family and society, working toward becoming a junzi (exemplary person), with comparatively little emphasis on metaphysical claims about gods or an afterlife.",
        interpretation:
          "Scholars frequently describe this as a fundamentally social and relational conception of meaning, in contrast to traditions that locate meaning primarily in individual salvation or a personal relationship with the divine.",
        
      },
      {
        tradition: "Sikhism",
        facts:
          "Meaning is found in realizing union with Waheguru (God) through remembrance of the divine Name (Naam Japna), honest living (Kirat Karni), and selfless service to others (Vand Chakna), ultimately overcoming the ego (haumai) that separates the self from God.",
        interpretation:
          "Scholars often describe Sikh meaning-making as distinctly integrated: spiritual devotion, ethical livelihood, and communal service are treated as inseparable rather than as separate obligations.",
      },
      {
        tradition: "Taoism",
        facts:
          "Meaning is found in aligning oneself with the Tao — the underlying, ineffable way of nature and the universe — through wu wei (effortless action) and simplicity, rather than through striving, ambition, or imposed structure.",
        interpretation:
          "Scholars frequently contrast this with more rule- or duty-based traditions: Taoist meaning is less about fulfilling a defined role and more about a kind of attuned non-resistance to how things naturally unfold.",
      },
      {
        tradition: "Jainism",
        facts:
          "Meaning is found in the soul's (jiva) progressive purification from karmic matter accumulated through action, ultimately achieving moksha (liberation) through right faith, right knowledge, and right conduct — most centrally, strict non-violence (ahimsa).",
        interpretation:
          "Scholars often note Jainism takes the logic of karma and liberation found elsewhere in Indian religious traditions and extends it to its most rigorous, systematic conclusion, particularly regarding non-harm to all living beings.",
      },
      {
        tradition: "Shinto",
        facts:
          "Rather than a systematic doctrine of ultimate meaning, Shinto emphasizes maintaining harmony with kami (spirits or divine forces present in nature, ancestors, and notable phenomena) through ritual purity, gratitude, and proper practice.",
        interpretation:
          "Scholars frequently note that Shinto is comparatively unconcerned with articulating a single doctrinal 'meaning of life,' focusing instead on ritual relationship and harmony in the present.",
      },
    ],
  },
  suffering: {
    slug: "suffering",
    intro:
      "Every tradition here takes suffering seriously as a central human problem — but they diverge sharply on whether suffering is a test, an illusion to see through, a consequence of choices, or simply an unavoidable feature of existence to be met with equanimity.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Suffering is variously understood as a consequence of the Fall, a test of faith, an opportunity for spiritual growth, or something God participates in directly through the suffering and death of Christ.",
        interpretation:
          "Scholars note the theology of the cross is often read as central here: suffering is not merely explained away, but is held to have been shared by God, which shapes how meaning is drawn from it.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Suffering (dukkha) is identified as the First Noble Truth — a basic feature of unenlightened existence, caused by craving and attachment, and addressable through the Eightfold Path.",
        interpretation:
          "This is often described by scholars as a diagnostic, almost clinical framework: suffering has an identifiable cause and, correspondingly, a cure through practice.",
      },
      {
        tradition: "Islam",
        facts:
          "Suffering is understood as part of divine testing (fitna), which can purify faith and increase reward, alongside an emphasis on patience (sabr) and trust in God's wisdom (tawakkul).",
        interpretation:
          "Scholars often frame this as suffering being reoriented rather than eliminated — its presence is accepted, but its meaning is transformed through the response of patient faith.",
      },
      {
        tradition: "Judaism",
        facts:
          "Perspectives range widely, from suffering as divine punishment in earlier biblical texts, to the Book of Job's challenge to that very framework, to post-Holocaust theology that questions whether suffering can be theologically justified at all.",
        interpretation:
          "Many scholars highlight this internal diversity itself as significant — Judaism is often characterized as unusually willing to preserve unresolved theological tension rather than settle on one account.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Stoicism distinguishes between events (which are outside our control) and our judgments about them (which are within our control), holding that suffering arises primarily from mistaken judgments, not from external events themselves.",
        interpretation:
          "This is frequently summarized by scholars as a cognitive account of suffering — centuries before modern psychology, Stoicism located distress in interpretation rather than circumstance.",
      },
      {
        tradition: "Hinduism",
        facts:
          "Suffering is understood as arising from ignorance (avidya) of one's true nature and from attachment, bound up with karma and the cycle of rebirth (samsara); addressed through right knowledge, devotion, or disciplined practice depending on the school.",
        interpretation:
          "Scholars often note the key contrast with Buddhism here: Hinduism generally affirms a real, eternal self (atman) underlying suffering, rather than treating the sense of self itself as the root problem.",
      },
      {
        tradition: "Confucianism",
        facts:
          "Suffering is addressed less through systematic metaphysical explanation and more through practical means — proper conduct, ritual propriety (li), and the maintenance of social harmony; social disorder and suffering are often attributed to a failure to fulfill role-based duties.",
        interpretation:
          "Scholars frequently point to Confucianism's relative silence on the ultimate origin of suffering as consistent with its broader emphasis on practical ethics over metaphysical speculation.",
      },
      {
        tradition: "Sikhism",
        facts:
          "Suffering is significantly attributed to the ego (haumai) and attachment to worldly illusion (maya), which separate the individual from God; it is addressed through devotion, service, and living according to divine will (Hukam).",
        interpretation:
          "Scholars often note this shares structural similarities with Buddhist and Hindu accounts of suffering rooted in ego and attachment, while remaining distinctly theistic in its proposed remedy.",
      },
      {
        tradition: "Taoism",
        facts:
          "Suffering is often understood as arising from resistance to the natural flow of the Tao — from excessive desire, rigid striving, and imposing artificial order on things that would otherwise unfold naturally.",
        interpretation:
          "Scholars frequently frame this as suffering being self-imposed through misalignment, with the proposed remedy being release and acceptance rather than struggle or systematic diagnosis.",
      },
      {
        tradition: "Jainism",
        facts:
          "Suffering results from karmic bondage caused by violence, attachment, and passions (kashaya); it is addressed through ascetic discipline, non-violence, and the gradual shedding of accumulated karma.",
        interpretation:
          "Scholars often note Jainism's account of suffering is unusually mechanistic and precise among world religions, treating karma almost as a physical substance that can be systematically removed through disciplined practice.",
      },
      {
        tradition: "Shinto",
        facts:
          "Suffering is less a subject of systematic doctrine than something addressed through ritual purification (harae) to remove impurity (kegare), which is understood to disrupt harmony with kami and community.",
        interpretation:
          "Scholars often characterize the Shinto approach to suffering as practice-oriented rather than explanatory — the emphasis falls on restoring ritual purity rather than on diagnosing suffering's ultimate cause.",
      },
    ],
  },
  death: {
    slug: "death",
    intro:
      "Few questions are asked as universally as what happens when we die. The traditions below differ not just in their answers, but in what kind of answer they consider meaningful — a promise, a process, a mystery, or a return.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Core texts (the New Testament) describe bodily resurrection and eternal life, with judgment determining the soul's fate. Denominations vary widely on details like purgatory, the timing of judgment, and the nature of heaven and hell.",
        interpretation:
          "Scholars often read Christian death theology as answering an implicit hope: that moral struggle in this life has ultimate meaning, vindicated in an afterlife.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Death is understood through the doctrine of rebirth (samsara), driven by karma, continuing until liberation (nirvana) is achieved. There is no permanent, unchanging soul that travels between lives — what continues is a causal process, not a fixed self.",
        interpretation:
          "This framework is often read by scholars as reframing death itself as the wrong question — the deeper issue is attachment and the illusion of a fixed self, not mortality per se.",
      },
      {
        tradition: "Islam",
        facts:
          "The Quran describes death as a transition to barzakh, an intermediate state, followed by bodily resurrection and judgment on the Day of Reckoning, leading to Paradise or Hell.",
        interpretation:
          "Islamic eschatology is frequently characterized by scholars as emphasizing moral accountability — death is not an end but a checkpoint in a continuous relationship with God's justice.",
      },
      {
        tradition: "Judaism",
        facts:
          "Beliefs about the afterlife are notably less doctrinally fixed than in Christianity or Islam. Historical and denominational views range from Sheol (a shadowy underworld) to bodily resurrection to focus on this-worldly ethical life over metaphysical speculation.",
        interpretation:
          "Many scholars note this openness reflects Judaism's broader emphasis on right action and communal life in the present, rather than a settled doctrine of what follows death.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Stoic philosophers (e.g. Epictetus, Marcus Aurelius, Seneca) held that death is a natural transformation, not an evil — the individual returns to the elements from which they came. Stoicism generally does not affirm a personal afterlife; some Stoics entertained the soul persisting temporarily before dissolving back into the cosmos.",
        interpretation:
          "Scholars often frame Stoic death-acceptance as central to its ethical project: since death is outside our control, fearing it is treated as a category error — training oneself not to fear death is treated as inseparable from living virtuously.",
      },
      {
        tradition: "Hinduism",
        facts:
          "Death is understood as a transition within the ongoing cycle of samsara — the soul (atman) is reborn according to accumulated karma, continuing until moksha (liberation) is achieved, at which point the self is understood either to merge with or realize its identity with Brahman, depending on the philosophical school.",
        interpretation:
          "Scholars often highlight that even within Hinduism, there is significant internal disagreement — between non-dualist (Advaita) and dualist (Dvaita) schools — over whether liberation means unity with the divine or an eternally distinct relationship to it.",
      },
      {
        tradition: "Confucianism",
        facts:
          "Confucius is recorded as notably reticent on the subject of death and the afterlife, with the Analects attributing to him the view that one should focus on properly understanding life before speculating about death; ancestor veneration remains an important practice, centered on honoring and remembering the dead.",
        interpretation:
          "Scholars frequently describe this deliberate agnosticism as consistent with Confucianism's broader this-worldly, practical orientation, which prioritizes ethical conduct in the present over metaphysical claims about what follows death.",
      },
      {
        tradition: "Sikhism",
        facts:
          "Death is understood within the cycle of rebirth shaped by karma, continuing until the soul achieves union with Waheguru; this liberation (mukti) ends the cycle of reincarnation.",
        interpretation:
          "Scholars often note Sikhism shares the rebirth-and-liberation structure common to Indian religious traditions, while placing distinct emphasis on union with a personal God as the goal.",
      },
      {
        tradition: "Taoism",
        facts:
          "Death is generally understood as a natural transformation — a return to the Tao, akin to other cyclical processes in nature — rather than an ending to be feared or a transition requiring judgment.",
        interpretation:
          "Scholars often compare this to Stoic views of death as natural transformation, though Taoism frames it specifically through the lens of cosmic flow and cyclical change rather than rational acceptance.",
      },
      {
        tradition: "Jainism",
        facts:
          "Death is a transition within the ongoing cycle of rebirth (samsara), determined by accumulated karma, continuing until the soul achieves moksha and rises to siddhashila, a realm of liberated, omniscient souls, at the universe's summit.",
        interpretation:
          "Scholars often note the highly structured Jain cosmology gives liberation a specific 'destination,' offering a more precisely mapped afterlife than many other karma-based traditions.",
      },
      {
        tradition: "Shinto",
        facts:
          "Shinto has no single fixed doctrine of the afterlife; the dead are often understood to become ancestral kami, continuing to influence and be honored by the living, particularly through household and shrine rituals.",
        interpretation:
          "Scholars frequently note that in Japan, Shinto's ancestor-focused practices have historically coexisted alongside Buddhist afterlife beliefs, with many practitioners drawing on both rather than treating them as exclusive.",
      },
    ],
  },
  consciousness: {
    slug: "consciousness",
    intro:
      "What is the self that experiences all of this? Some traditions treat it as an eternal soul, others as a temporary bundle of processes, and others locate it primarily in relationship and community rather than as an isolated inner entity at all.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Most traditions hold that humans possess an immortal soul, distinct from the body, created by God and bearing the 'image of God' (imago Dei), though the exact relationship between soul and body is debated across denominations.",
        interpretation:
          "Scholars often note this grounds human dignity and moral status in something metaphysically distinct from the physical body, with significant downstream implications for ethics.",
      },
      {
        tradition: "Buddhism",
        facts:
          "The doctrine of anatta (non-self) holds that there is no permanent, unchanging self or soul — what we call 'self' is a continuously changing process of physical and mental phenomena (the five aggregates).",
        interpretation:
          "This is often characterized by scholars as one of the more radical claims among major traditions: the intuitive sense of a stable 'I' is treated as a cognitive construction, not a metaphysical fact.",
      },
      {
        tradition: "Islam",
        facts:
          "Humans are understood to possess a soul (ruh) breathed into them by God, along with a nafs (self/ego) that can be inclined toward good or evil depending on spiritual discipline.",
        interpretation:
          "Scholars frequently note the nafs framework treats the self as something dynamic and morally contestable, rather than fixed — a site of ongoing spiritual struggle.",
      },
      {
        tradition: "Judaism",
        facts:
          "The nature of the soul (neshamah) is discussed with considerable variation, from the Hebrew Bible's relatively holistic view of the person to later Kabbalistic frameworks describing multiple layers of the soul.",
        interpretation:
          "Many scholars point out that Jewish thought historically emphasizes the person as an embodied, integrated whole, in contrast to sharper body-soul dualism found elsewhere.",
      },
      {
        tradition: "Stoicism",
        facts:
          "The self is identified primarily with the rational, governing faculty of the mind (hegemonikon) — the capacity for judgment and choice — rather than with the body or external circumstances.",
        interpretation:
          "This is often read by scholars as an early form of locating personal identity specifically in rational agency, prefiguring later philosophical treatments of the self.",
      },
      {
        tradition: "Hinduism",
        facts:
          "The atman (individual self/soul) is held by many schools to be eternal and, in non-dualist traditions like Advaita Vedanta, ultimately identical to Brahman, the universal ground of reality; dualist schools (like Dvaita) instead hold the self remains eternally distinct from, though related to, the divine.",
        interpretation:
          "Scholars often highlight this monist-versus-dualist split as one of the most significant unresolved philosophical debates within Hinduism itself, rather than a settled tradition-wide position.",
      },
      {
        tradition: "Confucianism",
        facts:
          "The self is understood primarily in relational terms — substantially constituted by one's roles and relationships (ruler-subject, parent-child, elder-younger, and so on) — with self-cultivation (xiushen) treated as the central lifelong practice of becoming a fully realized person.",
        interpretation:
          "Scholars often contrast this relational conception of self sharply with more individualistic frameworks that treat the self as a bounded, independent entity prior to its relationships.",
      },
      {
        tradition: "Sikhism",
        facts:
          "The soul is understood as a spark of the divine, temporarily separated from Waheguru by ego and illusion (maya); spiritual practice is aimed at dissolving that ego so the soul can recognize its true, God-connected nature.",
        interpretation:
          "Scholars often note this positions the self as fundamentally divine in origin, with ego treated as an obscuring layer rather than the self's true nature.",
      },
      {
        tradition: "Taoism",
        facts:
          "The self is understood as inseparable from the natural world and the Tao, rather than as a bounded, independent entity; rigid notions of a fixed self are often treated as an obstacle to living in harmony with the Tao.",
        interpretation:
          "Scholars frequently compare this fluid conception of self to Buddhist non-self, while noting Taoism frames it through nature and cosmic flow rather than through analysis of mental processes.",
      },
      {
        tradition: "Jainism",
        facts:
          "Every living being is held to possess an eternal, individual soul (jiva) that is inherently omniscient and blissful, though this true nature is obscured by accumulated karmic matter; liberation reveals the soul's original, unclouded nature.",
        interpretation:
          "Scholars often contrast this with Buddhist non-self: Jainism affirms a real, eternal individual soul, differing sharply from Buddhism despite both traditions sharing a karma-and-liberation framework.",
      },
      {
        tradition: "Shinto",
        facts:
          "There is no single systematic doctrine of the self; personhood is generally understood in relation to kami, ancestry, and community, with less emphasis on articulating an inner metaphysical self than in many other traditions.",
        interpretation:
          "Scholars often note this reflects Shinto's broader character as a practice-centered tradition, with communal ritual and relationship emphasized over abstract metaphysical claims about consciousness.",
      },
    ],
  },
  morality: {
    slug: "morality",
    intro:
      "How should we live? The traditions here root ethics in different foundations — divine command, the reduction of suffering, natural law, or living in accordance with reason — which shapes not just what counts as right action, but why.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Ethics is generally grounded in divine command and the example of Christ, especially the twin commandments to love God and love one's neighbor, alongside virtue traditions (e.g. the cardinal and theological virtues).",
        interpretation:
          "Scholars often describe this as combining rule-based and relational elements: moral action flows both from commandments and from a call to imitate a particular moral exemplar.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Ethical conduct (sila) is one of the three trainings of the Eightfold Path, generally oriented around reducing suffering for oneself and others, guided by precepts such as non-harming (ahimsa).",
        interpretation:
          "This is frequently framed by scholars as consequentialist in flavor — actions are evaluated significantly by the suffering or wellbeing they produce, rather than by rule-following alone.",
      },
      {
        tradition: "Islam",
        facts:
          "Morality is grounded in Sharia, derived from the Quran and Hadith, encompassing both ritual obligation and social ethics, with an overarching framework of accountability to God.",
        interpretation:
          "Scholars often note that Islamic ethics does not sharply separate 'religious' from 'moral' duty — worship and ethical conduct are treated as continuous with one another.",
      },
      {
        tradition: "Judaism",
        facts:
          "Ethics is substantially structured around the 613 mitzvot (commandments) found in the Torah, alongside a rich rabbinic tradition of legal and ethical interpretation (halakha).",
        interpretation:
          "Many scholars highlight the centrality of interpretation and debate itself in Jewish ethical life — moral reasoning is treated as an ongoing communal practice, not a closed system.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Virtue — wisdom, courage, justice, and temperance — is held to be the sole true good, with right action defined as that which accords with reason and nature, independent of outcomes.",
        interpretation:
          "This is often summarized by scholars as a virtue-ethics framework: character and intention are treated as what matters, rather than the external results of an action.",
      },
      {
        tradition: "Hinduism",
        facts:
          "Ethics is oriented around dharma — duty appropriate to one's social role, stage of life, and the cosmic order — with texts such as the Bhagavad Gita and Manusmriti discussing the specifics; non-harm (ahimsa) is a central value across many schools and traditions within Hinduism.",
        interpretation:
          "Scholars often describe this as a context-dependent ethical system: what counts as the right action can vary significantly by one's station in life, in contrast to more strictly universalist ethical frameworks.",
      },
      {
        tradition: "Confucianism",
        facts:
          "Ethics centers on the Five Constant Virtues — ren (benevolence), yi (righteousness), li (ritual propriety), zhi (wisdom), and xin (integrity) — expressed through the Five Relationships that structure proper conduct, with strong emphasis on filial piety (xiao).",
        interpretation:
          "Scholars often characterize Confucian ethics as simultaneously virtue-based and role-based, distinguishing it from ethical systems built primarily around universal rules or pure calculation of consequences.",
      },
      {
        tradition: "Sikhism",
        facts:
          "Ethics centers on honest labor (Kirat Karni), sharing with others (Vand Chakna), and constant remembrance of God (Naam Japna), alongside a strong emphasis on equality — historically including rejection of caste distinctions.",
        interpretation:
          "Scholars often highlight Sikhism's explicit egalitarianism as a notably distinctive ethical commitment relative to some other traditions with historical caste associations in the same region.",
      },
      {
        tradition: "Taoism",
        facts:
          "Ethics is oriented around wu wei (non-forcing action), humility, and simplicity, generally favoring minimal interference — with oneself, others, and nature — over rigid rule-following or assertive moral striving.",
        interpretation:
          "Scholars often contrast this with more rule-based or virtue-cultivation ethical systems: Taoist ethics is frequently described as an ethics of restraint and non-imposition rather than active moral construction.",
      },
      {
        tradition: "Jainism",
        facts:
          "Ethics centers on the Five Vows (vratas) — non-violence (ahimsa), truthfulness, non-stealing, chastity, and non-attachment — observed with particular strictness by monastics and in a moderated form by laypeople.",
        interpretation:
          "Scholars often highlight Jain non-violence as among the most rigorously and consistently applied in any world religion, extending to dietary practice and daily conduct in ways that shape the whole of life.",
      },
      {
        tradition: "Shinto",
        facts:
          "Ethics is less codified into fixed commandments and more expressed through maintaining purity, sincerity (makoto), and proper ritual conduct, alongside respect for kami, ancestors, and community harmony.",
        interpretation:
          "Scholars often describe Shinto ethics as oriented around right relationship and ritual correctness rather than around a fixed, universal moral code.",
      },
    ],
  },
  "free-will": {
    slug: "free-will",
    intro:
      "Are we truly free, or are our choices determined by forces beyond our control — divine will, karma, nature, or fate? The traditions below offer distinct, and sometimes internally contested, answers.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Most traditions affirm human free will as a gift from God, though its relationship to divine foreknowledge and grace has been a major point of internal theological debate for centuries (e.g. Calvinist predestination versus Arminian free will).",
        interpretation:
          "Scholars often note that this unresolved tension — between human freedom and God's sovereignty — has generated some of the most sustained debate within Christian theology.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Rather than free will in an absolute sense, action is understood through dependent origination — every state arises from prior causes and conditions, including karma from past actions, while intentional action (cetana) remains central to ethical responsibility.",
        interpretation:
          "This is often described by scholars as neither strict determinism nor libertarian free will, but a middle framework in which conditioned action still carries moral weight.",
      },
      {
        tradition: "Islam",
        facts:
          "Classical theology holds both that God has complete knowledge and power over all events (qadar) and that humans are morally responsible for their choices — a tension addressed differently across theological schools (e.g. Ash'ari versus Mu'tazila).",
        interpretation:
          "Scholars frequently note this mirrors a broader pattern across Abrahamic traditions: reconciling divine omnipotence with genuine human moral responsibility.",
      },
      {
        tradition: "Judaism",
        facts:
          "Free will is generally affirmed as necessary for moral responsibility and the commandments to have meaning, notably articulated by Maimonides, though the tension with divine foreknowledge is acknowledged rather than fully resolved.",
        interpretation:
          "Many scholars point to Jewish thought's comfort with holding this tension as unresolved, prioritizing the practical necessity of free will for ethical life over a fully settled metaphysics.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Stoicism holds that external events are governed by fate (a rational cosmic order, logos), while human freedom lies specifically in one's assent to impressions and judgments — what we do with what happens to us.",
        interpretation:
          "This is often read by scholars as a compatibilist position avant la lettre: fate governs circumstance, but a meaningful form of freedom remains in our response to it.",
      },
      {
        tradition: "Hinduism",
        facts:
          "The doctrine of karma holds that actions produce consequences that shape future circumstances and rebirths; free will is generally affirmed within these constraints, alongside the concept of one's inherent nature (svabhava), which also shapes choice.",
        interpretation:
          "Scholars often frame this as a compatibilist position: genuine freedom is exercised, but always within a deterministic web of karmic cause and effect established by past action.",
      },
      {
        tradition: "Confucianism",
        facts:
          "Significant emphasis is placed on self-cultivation, implying real capacity for moral choice and improvement through effort and education; the concept of Tian (Heaven, or the natural-moral order) sets an overarching framework individuals are expected to align with, while still choosing whether to act virtuously.",
        interpretation:
          "Scholars often note that Confucian thought assumes moral agency is real and improvable, standing in contrast to more strongly deterministic frameworks found elsewhere.",
      },
      {
        tradition: "Sikhism",
        facts:
          "Human choice operates within Hukam, the divine order or will of God; individuals are understood as free to choose whether to align themselves with Hukam through devotion and ethical living, or to remain bound by ego and karma.",
        interpretation:
          "Scholars often describe this as a compatibilist position: genuine choice exists, but is meaningfully exercised in relation to, not independent of, a larger divine order.",
      },
      {
        tradition: "Taoism",
        facts:
          "Rather than emphasizing willful choice, Taoism emphasizes wu wei — aligning one's actions with the natural flow of the Tao rather than imposing one's will upon it; excessive assertion of individual will is often treated as counterproductive.",
        interpretation:
          "Scholars frequently note this reframes the free will question itself: the Taoist ideal is less about exercising freedom and more about relinquishing forceful self-assertion altogether.",
      },
      {
        tradition: "Jainism",
        facts:
          "Karma is understood as a subtle physical substance that binds to the soul based on one's actions and intentions; individuals retain genuine agency to reduce future karmic influx through disciplined, non-violent choices.",
        interpretation:
          "Scholars often note Jainism places unusually strong emphasis on individual responsibility and effort, given how directly and mechanistically karma is tied to specific chosen actions in Jain metaphysics.",
      },
      {
        tradition: "Shinto",
        facts:
          "Shinto does not articulate a systematic doctrine of free will versus determinism; individuals are generally understood to act within a world shaped by kami and natural order, while retaining responsibility for ritual and ethical conduct.",
        interpretation:
          "Scholars often note that, consistent with its broader character, Shinto tends not to resolve this question doctrinally, leaving it largely unaddressed in systematic terms.",
      },
    ],
  },
  identity: {
    slug: "identity",
    intro:
      "What makes someone who they are — a soul, a body, a community, a pattern of change? These traditions locate identity in strikingly different places, from an eternal essence to an ever-shifting process to a self defined through relationship and belonging.",
    traditions: [
      {
        tradition: "Christianity",
        facts:
          "Identity is significantly grounded in being created in the image of God (imago Dei) and, for believers, in being adopted into relationship with God through Christ — identity is understood as fundamentally relational and God-given.",
        interpretation:
          "Scholars often note this frames identity as received rather than self-authored: who one is depends significantly on one's relationship to God, not solely on individual choice.",
      },
      {
        tradition: "Buddhism",
        facts:
          "Consistent with the doctrine of anatta, personal identity is treated as a conventional, continuously changing process rather than a fixed essence — what persists across time is a causal chain, not an unchanging self.",
        interpretation:
          "This is frequently described by scholars as treating identity as a useful fiction: practically necessary for navigating life, but not metaphysically ultimate.",
      },
      {
        tradition: "Islam",
        facts:
          "Identity is substantially shaped by one's relationship to God as a servant (abd) and steward (khalifah), and by membership in the ummah, the global community of believers.",
        interpretation:
          "Scholars often highlight the communal dimension here: individual identity is significantly embedded within a shared religious community rather than conceived in isolation.",
      },
      {
        tradition: "Judaism",
        facts:
          "Jewish identity is notably multidimensional, encompassing religious practice, ethnicity, covenant, and peoplehood, with debate continuing over the relative weight of belief, ancestry, and practice in defining who counts as Jewish.",
        interpretation:
          "Many scholars point to this multidimensionality as a defining feature — Jewish identity resists reduction to a single criterion like belief alone.",
      },
      {
        tradition: "Stoicism",
        facts:
          "Personal identity is centered on one's rational faculty and character, with Stoics distinguishing the true self (reason and virtue) from external roles, possessions, and circumstances, which are considered 'indifferent' to who one really is.",
        interpretation:
          "This is often read by scholars as an early argument for an inner, role-independent self — identity is what remains when externals like status or wealth are stripped away.",
      },
      {
        tradition: "Hinduism",
        facts:
          "Identity is understood variously depending on school — as the individual self (atman) ultimately identical to universal Brahman in non-dualist traditions, or as an eternally distinct though related self in dualist traditions; historically, social identity has also been closely tied to caste (varna) and stage of life (ashrama).",
        interpretation:
          "Scholars note that this represents a genuine, unresolved philosophical debate within Hinduism itself — over whether ultimate identity is fundamentally unified or fundamentally plural — rather than a single doctrinal position.",
      },
      {
        tradition: "Confucianism",
        facts:
          "Identity is substantially constituted by one's network of social relationships and the fulfillment of associated role-based duties, rather than by an independent, unchanging essence; the ongoing process of self-cultivation is central to who a person continually becomes.",
        interpretation:
          "Scholars frequently note this makes Confucian identity fundamentally relational and processual — something continually shaped through practice and relationship, rather than a fixed starting point.",
      },
      {
        tradition: "Sikhism",
        facts:
          "Identity is grounded in one's relationship with Waheguru and membership in the Khalsa community, with the Five Ks (including uncut hair and the turban for initiated Sikhs) serving as visible markers of committed identity and equality among members.",
        interpretation:
          "Scholars often note that Sikh identity combines deeply personal spiritual devotion with a strong, visibly marked communal and egalitarian identity.",
      },
      {
        tradition: "Taoism",
        facts:
          "Identity is understood as fluid and processual, deeply embedded in and inseparable from the natural world, rather than as a fixed, bounded self distinct from one's surroundings.",
        interpretation:
          "Scholars frequently compare this to Buddhist and some Hindu non-dualist views of identity as constructed or interdependent, while Taoism frames it specifically through harmony with nature rather than metaphysical analysis of the self.",
      },
      {
        tradition: "Jainism",
        facts:
          "Identity is grounded in the individual, eternal soul (jiva), understood as ultimately distinct from every other soul and from all non-living matter (ajiva); spiritual practice aims to realize the soul's true, unclouded nature.",
        interpretation:
          "Scholars often note Jainism affirms a strongly individualist metaphysics of the self relative to non-dualist Hindu or Buddhist non-self views, treating each soul as a genuinely separate, eternal entity.",
      },
      {
        tradition: "Shinto",
        facts:
          "Identity is closely tied to community, ancestry, and one's relationship to local kami and shrines, often expressed through participation in seasonal festivals (matsuri) and household or regional ritual practice.",
        interpretation:
          "Scholars often describe Shinto identity as fundamentally local and communal, historically bound to place and lineage rather than to a universal creed shared identically across all practitioners.",
      },
    ],
  },
};