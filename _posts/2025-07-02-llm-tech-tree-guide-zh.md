---
title: '从零到LLM：一份完整的大语言模型科技树指南'
date: 2025-07-02
permalink: /zh/posts/2025/07/llm-tech-tree-guide/
author_profile: false
tags:
  - Artificial Intelligence
  - Machine Learning
  - Deep Learning
  - Natural Language Processing
  - Large Language Models
lang: zh
other_lang: /posts/2025/07/llm-tech-tree-guide/
---
> 本文内容均由LLM生成，为了方便给家人和朋友分享而整理成文档。

## **第一部分：主干——教机器思考**

在深入探讨构成当今人工智能（AI）革命核心的复杂技术之前，我们必须首先建立一个坚实的概念框架。这部分将为您描绘出人工智能领域的宏观版图，厘清那些经常被混淆的关键术语。我们将从最广阔的森林开始，逐步聚焦到特定的树木，最终抵达我们此行的目的地——大语言模型（LLM）。

### **1.1 人工智能的森林——不只是机器人**

当我们听到“人工智能”这个词时，脑海中浮现的往往是科幻电影中拥有自我意识的机器人。然而，现实中的人工智能是一个远比这更广阔、更多样化的领域。一个更为精准且实用的定义来自AI研究者弗朗索瓦·肖莱（François Chollet），他将AI描述为“致力于将通常需要人类智能才能完成的智力任务自动化的努力” ¹。这个定义涵盖了从简单的任务自动化到复杂的认知模拟等一切活动，例如视觉感知、语音识别、决策制定和语言翻译 ²。

为了更好地理解这个庞大的领域，我们可以借助两个生动的比喻。

第一个比喻是俄罗斯套娃 ¹。

想象一套俄罗斯套娃，最大的那个娃娃代表着“人工智能”（AI），它是一个包罗万象的总称。打开它，里面是一个稍小一点的娃娃，代表“机器学习”（Machine Learning, ML）。再打开机器学习这个娃娃，里面还有一个更小的娃娃，那就是“深度学习”（Deep Learning, DL）。这个层层嵌套的结构直观地展示了它们之间的关系：深度学习是机器学习的一个子集，而机器学习又是人工智能的一个子集 ¹。

第二个比喻是交通工具 ²。

把“人工智能”想象成“交通”这个宏大的概念，它包含了所有运送人和物的方式。在这个框架下，“机器学习”就好比是“汽车”，它是实现交通的一种非常重要且流行的方式。而“深度学习”则可以看作是“电动汽车”，是汽车领域中一种更先进、更特定的技术。这个比喻的精妙之处在于，它清晰地表明，并非所有的人工智能都属于机器学习，就像并非所有的交通方式都是汽车一样——我们还有火车、自行车和飞机。

这种区分至关重要，因为它揭示了AI内部一个根本性的分野：**学习型AI**与**非学习型AI**。

- **非学习型AI（基于规则的系统）**：这是AI的早期形态，它们遵循由人类程序员精心编写的一系列“如果……那么……”（if-then）规则来执行任务 ⁴。它们可以非常复杂和“智能”，但它们无法从经验中学习或自我改进。典型的例子包括：

  - **游戏AI**：在电子游戏中，非玩家角色（NPC）的行为通常由预设的脚本和规则驱动，而不是通过学习玩家的行为来调整策略 ²。

  - **专家系统**：上世纪70年代的MYCIN系统，它能根据一个包含大量医学知识和规则的数据库来诊断细菌感染并推荐抗生素 ⁴。

  - **自动化决策系统**：简单的报税软件，它根据预设的税法规则来计算税款，而不会从用户的报税数据中学习新的避税技巧 ²。

- **学习型AI**：这是现代AI的主流，其核心就是机器学习。这类系统不是被动地执行指令，而是主动地从数据中发现模式并做出决策 ⁴。

理解“智能”是一个光谱而非一个开关，是踏入AI世界的第一步。一个系统之所以被称为“人工智能”，并非因为它拥有了与人类无异的意识，而是因为它能够自动化一项原本需要人类智力才能完成的任务。这个任务的复杂程度决定了它在智能光谱上的位置。基于规则的系统位于光谱的一端，它们像是技艺精湛但毫无创造力的工匠，完美地执行着被赋予的指令。而学习型系统则位于光谱的另一端，它们更像是学徒，通过观察和实践来掌握技能。正是这种从“编码指令”到“提供经验”的范式转变，催生了机器学习的崛起，并为我们今天所知的LLM铺平了道路。

### **1.2 第一个主分支——机器学习**

现在，我们打开人工智能这个最大的套娃，看到了里面的第一个核心分支：机器学习（Machine Learning, ML）。机器学习的先驱亚瑟·萨缪尔（Arthur Samuel）在几十年前就给出了一个至今仍然非常精辟的定义：它是一个“让计算机有能力在没有被明确编程的情况下进行学习的研究领域” ¹。这句话的重点在于“没有被明确编程”。

这意味着，程序员的角色发生了根本性的转变。在传统的编程模式下，程序员必须预见所有可能性，并为每一种情况编写精确的指令。而在机器学习中，程序员不再是规则的制定者，而更像是一位老师。他们的核心任务是为机器提供一本精心编纂的“教科书”——也就是一个庞大的、被标记好的数据集（labeled data）²。机器通过“阅读”这本教科书，自主地学习和归纳出隐藏在数据背后的模式和规律。

为了具体理解这个过程，让我们回到一个更简单的场景：水果分拣 ¹。

1.  **人类智能**：想象一个工人在传送带旁，凭着自己的经验和知识，熟练地将苹果、香蕉和橙子分拣到不同的箱子里。

2.  **非学习型AI（规则系统）**：现在，我们用一台机器取代工人。这台机器配备了一个扫描仪，每当一个水果经过，它就扫描水果上预先贴好的标签。机器的程序非常简单：IF 标签 == "苹果", THEN 放入苹果箱。这个系统能工作，但非常僵化。如果一个水果没有标签，或者标签模糊不清，机器就束手无策了。它完全依赖人类预先设定的规则。

3.  **机器学习**：这是真正的变革。我们给机器装上一个摄像头，然后向它展示成千上万张已经标记好的水果图片——“这是苹果”，“这是香蕉”，“这不是苹果”。我们不告诉它苹果是红色的、圆形的，或者香蕉是黄色的、弯曲的。我们只是提供大量的“例子”。机器通过分析这些海量图片，自己去发现“苹果性”或“香蕉性”的内在模式。最终，它学会了识别。当一个全新的、从未见过的、没有标签的苹果出现在传送带上时，它能够凭借自己学到的模式，准确地将其识别并分拣出来 ²。

这个从“硬编码规则”到“从数据中学习”的转变，是机器学习的核心思想。这种思想的应用无处不在：

- **垃圾邮件过滤器**：它通过分析数百万封被用户标记为“垃圾邮件”和“非垃圾邮件”的邮件，学习垃圾邮件的语言模式，从而自动过滤掉新的垃圾邮件 ²。

- **客户服务聊天机器人**：一些聊天机器人能从过去的客户对话中学习，从而更准确地回答新的客户问题 ²。

- **信用评分**：银行使用机器学习模型分析大量的历史贷款数据，学习那些能够预测客户是否会违约的特征，从而评估新申请人的信用风险 ²。

这一 paradigm shift（范式转移）的意义深远。它意味着，对于许多复杂问题，人类不再需要去理解其背后的所有规则。例如，我们很难用代码精确定义什么是“垃圾邮件的语气”，但我们可以轻易地提供成千上万个例子。机器学习的出现，使得解决这类问题的重心从“设计精巧的算法”转向了“收集、清理和标记高质量的数据”。整个围绕数据展开的产业——数据采集、数据标注、数据存储——也因此蓬勃发展。程序员的角色从一个逻辑缜密的建筑师，转变为一个知识渊博的图书管理员和一位循循善善诱的老师。

### **1.3 更深层的生长——深度学习**

在机器学习的版图内，存在一个特别强大且富有活力的分支，它正是近年来几乎所有AI重大突破的引擎——深度学习（Deep Learning, DL）。深度学习是机器学习的一个子领域，它的核心是使用一种受人脑结构启发的模型，即“人工神经网络”（Artificial Neural Networks）⁴。当这些网络包含许多层时，我们称之为“深度神经网络”，这也是“深度”一词的由来 ²。

深度学习与传统机器学习最根本的区别在于**“特征提取”（feature extraction）**的方式。这是一个理解DL威力的关键概念。

- **传统机器学习**：在前面水果分拣的例子中，如果我们使用传统机器学习，可能需要一位人类专家先介入。这位专家会告诉机器应该关注哪些“特征”，比如“颜色”、“形状”、“纹理”等。这个过程就叫作特征提取。人类需要手动定义好这些关键特征，然后机器才能基于这些特征去学习 ²。这就像教一个孩子认字，我们得先把字的偏旁部首拆解出来教给他。

- **深度学习**：深度学习则完全不同，它能够实现**自动特征提取**。你不需要告诉模型要关注什么。你只需将最原始的数据——比如一张图片的全部像素——直接“喂”给深度神经网络。网络的多层结构会像一个高度自动化的流水线一样，逐层地、自动地学习和提取特征 ²。

  - **第一层**可能只学习到一些非常基础的特征，比如边缘、角落和颜色块。

  - **第二层**会把第一层学到的边缘和颜色块组合起来，形成更复杂的特征，比如纹理、图案和简单的形状（如圆形、方形）。

  - **更深的层次**则继续组合，可能会识别出“眼睛”、“鼻子”、“耳朵”这样的部件。

  - **最后几层**将这些部件组合起来，最终形成一个高度抽象的概念，比如“狗”或“猫”。

这个从简单到复杂、从具体到抽象的逐层学习过程，与人类大脑的视觉皮层处理信息的方式有相似之处。正是这种自动构建特征层次的能力，使得深度学习在处理像图像、声音和文本这类复杂的“非结构化数据”时，表现得异常出色 ³。

为了解释深度学习为何在近年来才爆发出如此巨大的能量，我们可以借用著名AI科学家吴恩达（Andrew Ng）的**“火箭飞船”比喻 ⁶**：

- **火箭引擎**：代表深度学习的模型，特别是那些拥有庞大复杂结构的深度神经网络。

- **燃料**：代表训练模型所需的海量数据。

这个比喻的洞见在于：要想成功发射火箭并进入轨道，你必须同时拥有一个巨大的引擎和巨量的燃料。如果你只有一个强大的引擎但燃料不足，你飞不了多远就会坠落。如果你有海量的燃料但引擎太小，你甚至无法起飞。

几十年来，神经网络的理论（引擎的设计图纸）其实一直都存在。但我们长期以来缺少两样东西：一是足以驱动这些庞大引擎的**计算能力**（强大的GPU，即图形处理器，可以看作是火箭的发射台），二是用以填充它们的**海量数据**（燃料）。随着互联网的普及和计算成本的下降，我们终于在21世纪初同时集齐了这两大要素。这就像我们终于为强大的火箭引擎加满了燃料，并建好了坚固的发射台，一场人工智能的“发射升空”便不可避免了。

所有那些令人惊叹的现代AI应用，几乎都由深度学习驱动：

- **图像识别**：社交媒体自动为你照片中的朋友打上标签 ²。

- **自动驾驶**：特斯拉等车辆通过摄像头和传感器感知周围环境，做出驾驶决策 ²。

- **语音助手**：Siri和Alexa能够准确理解你的语音指令，并以自然的方式回应 ²。

深度学习的真正魔力，并不仅仅在于它“模仿大脑”，而在于其**规模化的抽象能力**。这种分层结构赋予了它一种从原始感知数据中构建起一个复杂、丰富的世界模型的能力。当这种能力与前所未有的计算能力和数据规模相结合时，它便解锁了解决那些曾被认为机器无法企及的问题的潜力。这正是我们通往大语言模型之路的最后一块基石。

## **第二部分：语言的挑战——教机器阅读**

我们已经了解了机器如何通过学习来获得“智能”。现在，我们将焦点转向一个对人类而言与生俱来，但对机器来说却异常艰涩的挑战：**理解语言**。这一部分将带领我们进入自然语言处理（NLP）的世界，探索机器在“阅读”方面遇到的早期困难，以及最初的解决方案是如何为后来的革命埋下伏笔的。

### **2.1 对意义的探索——自然语言处理**

自然语言处理（Natural Language Processing, NLP）是人工智能和机器学习的一个重要分支，其核心目标是让计算机能够解读、处理并理解人类的语言 ⁷。这听起来似乎很简单，但实际上，人类语言是计算机科学中最棘手的难题之一。原因在于，我们的语言充满了各种“不规范”的特性：

- **歧义性**：同一个词在不同语境下可以有完全不同的意思。例如，“请给我一个苹果”，这里的“苹果”可以指水果，也可以指手机。

- **上下文依赖**：一句话的真正含义往往取决于前后的对话内容。

- **多样性**：语言中充满了方言、俚语、讽刺、比喻、情感色彩，甚至还有语法错误 ⁷。

人类大脑可以毫不费力地处理这些复杂情况，但对于只懂得逻辑和数学的计算机来说，这简直是一场噩梦。因此，NLP的首要任务，也是其面临的第一个巨大障碍，就是**如何将模糊、充满象征意义的词语，转化为计算机能够理解的、精确的数字** ⁹。这个过程被称为“词嵌入”（Word Embedding）。

我们可以用一个**“词汇地图”**的比喻来理解词嵌入。想象一下，我们不再把每个词看作一个孤立的符号，而是把它放在一张巨大的、多维度的地图上。在这张地图上，每个词都有自己独特的“坐标”（一个由许多数字组成的向量）。这张地图的神奇之处在于，词与词之间的空间关系反映了它们在语义上的关系 ¹¹。

- “国王”和“王后”的坐标会非常接近。

- “男人”和“女人”的坐标也会很接近。

- 更有趣的是，从“国王”到“王后”的向量（方向和距离），会和从“男人”到“女人”的向量非常相似。同样，从“法国”到“巴黎”的向量，也会和从“中国”到“北京”的向量相似。

通过这种方式，词语的意义不再是一个孤立的点，而是由它在整个“词汇宇宙”中的相对位置所定义。这种将词语关系数学化的方法，是现代NLP的基石。

在将词语数字化之后，计算机就可以执行一系列基础的NLP任务，从而逐步“理解”文本 ⁷：

- **分词（Tokenization）：** 这是最基础的一步，即将一个句子打碎成一个个独立的单元，这些单元被称为“词元”（token）。例如，句子“The cat sat on the mat.”会被分解成`['The', 'cat', 'sat', 'on', 'the', 'mat', '.']`这些词元 ⁷。

- **词性标注（Part-of-Speech Tagging）**：机器会为每个词元标注其语法身份，比如名词、动词、形容词等。这有助于理解句子结构 ⁷。

- **命名实体识别（Named Entity Recognition）**：机器会识别出句子中的专有名词，比如人名（“简”）、地名（“法国”）或组织名 ⁷。

整个NLP的发展史，可以看作是一场将人类语言中模糊、依赖情境的符号，转化为计算机能够处理的、具体、结构化的数学表示的漫长征途。早期的NLP方法试图建立僵硬的规则和字典，但收效甚微。词嵌入的出现是一个转折点，它不再试图为词语定义一个绝对的意义，而是通过它们在海量文本中的共现关系，来捕捉其相对的、动态的意义。这种从“绝对主义”到“关系主义”的转变，为深度学习在NLP领域的应用打开了大门。

### **2.2 旧路径——逐字阅读（循环神经网络 - RNN）**

当深度学习遇上自然语言处理，一个直观且优雅的解决方案应运而生：循环神经网络（Recurrent Neural Network, RNN）。RNN的设计初衷就是为了处理序列数据，比如时间序列、音频，以及我们最关心的——文本 ¹²。它的工作方式非常符合人类阅读的直觉：从左到右，一个词一个词地处理句子。

RNN的核心机制是它拥有一个“记忆单元”或称为“隐藏状态”（hidden state）。当RNN读取第一个词时，它会生成一个对这个词的理解，并存入这个记忆单元。当它读取第二个词时，它会结合第二个词的输入和记忆单元中关于第一个词的信息，来更新自己的记忆。以此类推，每一步的理解都建立在之前所有词的基础上。这就像我们阅读时，大脑会不断累积前面句子的信息来理解当前的内容。

然而，这种看似完美的设计，却隐藏着一个致命的缺陷：**它的记忆是短暂的**。

让我们来看一个经典的例子，这个例子清晰地暴露了RNN的“健忘症” ¹²：

> 句子一：“汤姆是一只猫。”
>
> 句子二：“汤姆最喜欢的食物是\_\_\_\_。”

对于人类来说，填空题的答案显而易见是“鱼”。因为我们清楚地记得第一句话提供的关键信息。但是，一个标准的RNN在处理到第二句话的末尾时，很可能已经忘记了第一句话的内容。它知道需要预测一种食物，但由于丢失了“汤姆是猫”这个核心上下文，它可能会猜“披萨”、“苹果”或者任何其他食物，就是猜不到最合理的“鱼” ¹²。

这种“长期依赖问题”（long-term dependency problem）的背后，是一个被称为**“梯度消失/爆炸”**的技术难题 ¹²。我们可以用一个比喻来理解它：想象一下，你在一排很长的人队伍的队首说一句悄悄话，并让大家依次传下去。当信息传到队尾时，很可能会发生两种情况：要么信息在传递过程中越来越弱，最终变得模糊不清，甚至完全消失（梯度消失）；要么信息在传递中被不断曲解和放大，变得面目全非（梯度爆炸）。

在RNN中，“记忆”就像这句悄y悄话，每经过一个时间步（一个词），它就会衰减或变形。当句子很长时，开头词语的信息就很难有效地传递到结尾。

为了解决这个问题，研究人员设计出了一种更复杂的RNN变体，叫做**长短期记忆网络（Long Short-Term Memory, LSTM）** ¹²。LSTM在RNN的基础上增加了一些精巧的“门控”结构（输入门、遗忘门、输出门），就像在信息传递的管道上安装了一些阀门。这些阀门可以智能地决定哪些信息是重要的，需要长期保留；哪些信息是次要的，可以被遗忘。LSTM在一定程度上缓解了RNN的健忘问题，并在很长一段时间里成为NLP任务的主力模型。

然而，无论是RNN还是LSTM，它们都未能摆脱一个根本性的束起。这个束缚源于它们最核心的设计理念——**顺序处理**。这种一次处理一个词的方式，就像一个天生的瓶颈，限制了它们的潜能。

首先是**记忆瓶颈**。信息必须线性地、一步步地穿过整个序列，无论LSTM的门控设计得多么巧妙，信息的损耗和扭曲在长距离下依然不可避免。

其次是**计算瓶颈**。这也是更致命的一点。由于必须按顺序处理，你无法同时计算第10个词和第1个词的表示，因为计算第10个词依赖于第9个词的结果，而第9个词又依赖于第8个词，以此类推。这意味着整个计算过程无法大规模并行化。在今天这个数据量和模型尺寸都呈爆炸式增长的时代，这种计算效率的低下是无法接受的。

因此，整个领域都在期待一场革命。我们需要一种全新的架构，它能够彻底摆脱时间的线性束缚，用一种更全局、更高效的方式来阅读和理解语言。这个革命性的答案，就是Transformer。

## **第三部分：革命——一种新的阅读方式**

在RNN和LSTM因其固有的顺序处理瓶颈而步履维艰之时，人工智能领域正酝酿着一场颠覆性的变革。2017年，一篇由Google研究人员发表的、标题极具宣言色彩的论文——《Attention Is All You Need》（注意力就是你所需要的一切）——横空出世，宣告了一个新时代的来临。这篇论文介绍的**Transformer架构**，彻底改变了机器处理语言的方式，并成为了此后几乎所有大型语言模型的基石 ¹⁵。

### **3.1 突破——Transformer架构**

Transformer最核心的、也是最具革命性的创新，是它**完全摒弃了RNN的循环结构** ¹⁵。它不再需要像人一样逐字逐句地、按顺序阅读文本。取而代之的是，它能够

**同时处理输入序列中的所有词语** ¹⁷。

想象一下，RNN像一个只能通过一根细长的吸管来喝汤的人，一次只能吸一小口，效率低下且视野局限。而Transformer则像一个拥有一个巨大漏斗的人，可以一次性将整碗汤倒入，并同时观察和分析汤里的所有成分。

这种并行处理的能力，一举打破了RNN的计算瓶颈。计算机的GPU（图形处理器）拥有数千个核心，天生就擅长并行计算。Transformer的设计完美地利用了这一点，使得训练速度得到了前所未有的提升。模型可以在更短的时间内处理更大规模的数据集，这为构建更大、更强的语言模型打开了大门。

这场变革的影响是如此深远，以至于有人将其比作一场**“新的工业革命”** ¹⁸。在过去的工业革命中，人类发明了发电机，将水的势能转化为电能，创造出前所未有的生产力。而Transformer，则像语言处理领域的“发电机”，它解锁了一种全新的、能够大规模生成和理解语言的“软件能源”，并以此为基础创造出能够再创造软件的软件。

那么，Transformer是如何在没有循环结构的情况下，理解句子中词语的顺序和相互关系的呢？答案就在那篇论文的标题里——**注意力机制（Attention Mechanism）**。

### **3.2 秘密武器——自注意力机制**

如果说Transformer是革命性的架构，那么**自注意力机制（Self-Attention）**就是这场革命的秘密武器。这是一个相对复杂的概念，但我们可以通过一系列比喻来层层剥开它的神秘面纱。其核心思想是：在处理句子中的任何一个词时，自注意力机制都允许这个词去“审视”句子中的所有其他词，并根据相关性动态地赋予它们不同的“关注权重” ¹⁹。

比喻一：鸡尾酒会

想象你置身于一个嘈杂的鸡尾酒会。为了听清某一个人的讲话，你并不会孤立地只听他发出的声音。你的大脑会自动进行一系列复杂的处理：你会更多地关注他正在对话的人，观察他的口型和肢体语言，同时也会留意周围谈话的整体氛围和话题，所有这些信息综合起来，才能帮助你准确地理解他的意图。

自注意力机制就让句子中的每个词都拥有了这种能力。当模型处理“它”这个词时，“它”会“环顾四周”，去“倾听”句子中所有其他的词，从而判断自己到底指代的是什么。

比喻二：搜索引擎与在线配对（Q, K, V的魔法）

为了实现上述的“环顾四周”，模型为句子中的每个词都生成了三个特殊的向量，它们是自注意力的核心构件：查询（Query）、键（Key）和值（Value） 19。我们可以用一个搜索引擎或在线配对平台的例子来理解它们的作用 22。

让我们以句子“那个机器人拿起了一本书，因为它很重”为例，重点分析“它”这个词。

1.  **查询（Query, Q）**：这是当前词发出的“搜索请求”或“配对需求”。它表达了“我需要什么信息来更好地理解我自己”。

    - **例子**：当模型处理到“它”这个词时，会生成一个**Query**向量，这个向量的含义可以被理解为：“我是一个代词，我正在寻找一个可以被我指代的名词，这个名词很可能是一个物体。”

2.  **键（Key, K）**：这是句子中每个词用来“被搜索”的“关键词”或“个人标签”。它广播了“我是什么，我有什么样的属性”。

    - **例子**：“机器人”这个词会生成一个**Key**向量，其含义是：“我是一个单数名词，是一个具体的物体，可以被代词指代。”“书”这个词也会生成一个类似的**Key**向量。

3.  **匹配与打分**：接下来，模型会用“它”的**Query**向量，去和句子中**所有**词（包括它自己）的**Key**向量进行匹配计算（通常是点积运算），得出一个“注意力分数” ¹⁹。这个分数代表了相关性或匹配度。

    - **例子**：“它”的Query（寻找一个物体名词）与“机器人”的Key（我是一个物体名词）匹配度会很高，得到一个高分。与“书”的Key匹配度也会比较高。而与“拿起”或“因为”这些词的Key匹配度就会很低。

4.  **加权与聚合（Value, V）**：每个词除了有Key之外，还有一个**Value**向量。**Value**向量代表了这个词的“真实含义”或“所携带的信息内容”。注意力分数经过一个Softmax函数的归一化处理后，会变成一组权重。当前词（“它”）的最终、带有上下文的新表示，就是通过将句子中所有词的**Value**向量按照这些权重进行加权求和得到的 ¹⁹。

    - **例子**：因为“机器人”和“书”获得了最高的注意力分数，所以它们的**Value**向量（即它们的语义信息）将在构建“它”的新表示时占据主导地位。通过分析句子结构（“因为它很重”），模型最终可能会让“书”的权重高于“机器人”，从而正确地理解“它”指代的是“书”。

这个**Query-Key-Value（QKV）**的过程，本质上是一个高度灵活和动态的信息筛选与聚合过程。它使得句子中的每个词都能从全局视角汲取与自己最相关的信息，从而构建出对自身含义的深刻理解。

多头注意力（Multi-Head Attention）

为了让理解更加丰富和立体，Transformer并不会只进行一次QKV计算。它会并行地、独立地进行多次，这个过程被称为“多头注意力” 15。

这就像一个专家会诊。我们不是只请一位全科医生，而是同时请来了一位语法专家、一位语义关系专家、一位逻辑推理专家等。每一个“注意力头”（Attention Head）都像一位专家，它有自己独立的一套Q、K、V权重矩阵，专注于从不同角度分析词与词之间的关系。

- 一个头可能专注于识别主谓宾的语法结构。

- 另一个头可能专注于识别同义词或反义词关系。

- 还有一个头可能专注于解决代词指代问题。

最后，所有这些“专家头”的分析结果会被整合起来，形成一个对句子全面、多维度、深层次的理解。

自注意力机制的真正威力在于，它不仅仅是一个巧妙的工程设计，更是一个根本性的计算范式。它本质上是一个**可学习、可微分、关系型的数据库查询系统** ²⁴。

- **关系型**：它不是查找孤立的信息，而是在一组数据内部（句子中的所有词）寻找它们之间的相互关系。

- **可学习**：生成Q、K、V向量的权重矩阵不是固定的，而是通过模型训练过程不断学习和优化的 ²⁰。这意味着模型在学习语言的同时，也在学习“如何更好地提问（Query）”和“如何更好地被检索（Key）”，即学习“应该注意什么”。

- **可微分**：整个注意力计算过程是由一系列平滑的数学运算（矩阵乘法和Softmax）构成的。在数学上，“可微分”意味着我们可以计算出微小的调整对最终结果的影响。这至关重要，因为它使得整个模型可以通过“梯度下降”等优化算法进行端到端的训练。当模型犯错时，错误信号可以顺畅地传导回来，指导Q、K、V的权重矩阵进行调整，让模型下一次做得更好。

正是这个集查询、学习和优化于一体的强大机制，让Transformer摆脱了时间的枷锁，能够以一种全局的、动态的、可扩展的方式，深刻地捕捉语言的复杂内涵，从而开启了大型语言模型的辉煌时代。

## **第四部分：树冠——大语言模型时代**

随着Transformer架构这一革命性主干的确立，人工智能的科技树开始以前所未有的速度向上生长，枝繁叶茂，最终形成了我们今天所见的壮观“树冠”——大型语言模型（Large Language Models, LLM）。这一部分，我们将深入这片繁茂的树冠，探究究竟是什么让这些模型配得上“大”这个字，它们是如何被“教育”成才的，以及在这个庞大的家族中，有哪些知名的成员和派别。

### **4.1 LLM的“大”体现在哪里？**

当我们谈论一个模型是“大型”语言模型时，“大”主要体现在两个维度上：**参数（Parameters）的数量**和**训练数据（Training Data）的规模**。这两者相辅相成，共同构成了LLM强大的能力基础。

**要素一：参数——模型的“脑容量”**

- **定义**：参数是模型内部的可调变量，通常指神经网络中的“权重”（weights）和“偏置”（biases）²⁷。它们是模型在训练过程中从数据里学到的“知识”的载体 ²⁸。当模型进行预测或生成文本时，它使用的就是这些参数。

- **比喻**：理解参数最直观的方式，是将其想象成一台极其复杂的机器上**数以亿计的“旋钮”或“杠杆”** ³⁰。一个简单的线性方程  
  y=mx+b 只有两个参数（m 和 b）³¹。而一个LLM，则是一个拥有数十亿甚至上万亿个旋钮的超级函数。模型的“训练”过程，本质上就是通过海量数据的“调试”，将这亿万个旋钮精确地调到正确位置的过程。

- **规模**：参数的数量直接决定了模型的复杂度和“脑容量”。更多的参数意味着模型有能力捕捉和存储数据中更精细、更复杂的模式和知识 ²⁸。为了让您对这个“大”有具体的概念，以下是一些知名模型的参数规模：

  - OpenAI的GPT-3模型拥有 **1750亿** 个参数 ²⁷。

  - Meta的Llama 2模型家族，参数规模从70亿到700亿不等。

  - 一些更新的模型，据称参数量已达到万亿级别 ³³。

**要素二：训练数据——模型的“图书馆”**

- **定义**：训练数据是用来“教导”LLM如何理解和生成语言的庞大文本资料库 ²⁸。数据的质量和数量直接决定了模型的性能。

- **规模**：LLM的训练数据量通常以**PB（Petabyte）**为单位来衡量 ³⁴。1 PB等于100万GB。作为参照，据估计，人脑的记忆容量大约在2.5 PB左右 ³⁴。这些数据来自哪里？它们几乎囊括了可公开访问的互联网的很大一部分，包括：

  - **Common Crawl**：一个包含超过500亿个网页的庞大网络爬取数据集 ²⁷。

  - **维基百科**：包含约5700万页面的知识宝库 ²⁷。

  - **海量的书籍**、学术文章、新闻、社交媒体帖子等 ¹¹。

可以说，LLM是在一个人类历史上前所未有的、巨大的“数字图书馆”里进行学习的。

然而，“大”的意义远不止于“知道得更多”。当模型的参数数量和数据规模跨越某个临界点后，会发生一种奇妙的质变——**“涌现能力”（Emergent Abilities）**的出现。

LLM最基础的训练任务其实非常单纯：**预测下一个词** ³⁵。给定一段文本，比如“今天天气真不错，我们去公园”，模型要做的就是预测下一个最可能出现的词，比如“散步”。一个小型模型也能完成这个任务，但可能做得比较机械。

但是，当一个模型需要在一个囊括了人类几乎所有知识领域的、数万亿词汇的数据集上持续优化“预测下一个词”这个任务时，它被迫不能只靠简单的统计和记忆。为了更准确地预测，它必须去学习和内化更深层次的规则，比如语法结构、逻辑关系、因果推理，甚至是物理世界的基本常识和社会文化的微妙之处。

于是，那些我们并未明确教给它的高级能力，比如进行零样本学习（zero-shot learning，即在没有任何范例的情况下完成一项新任务）²⁷、编写代码、进行数学推理、写诗等，就作为这种极致规模化学习的“副产品”而“涌现”了出来 ¹⁶。这就像一个为了成为终极模仿大师的学生，在模仿了全世界所有伟人的言行举止后，不知不觉中自己也掌握了深刻的智慧和多样的技能。

因此，LLM的“大”，不仅仅是量的积累，更是实现能力质变的必要条件。它将一个单纯的“词语预测器”转变为一个具备初步“推理能力”的引擎。这也解释了为什么各大科技公司在军备竞赛般地追求更大规模的模型——他们不仅仅是为了增加模型的知识储备，更是为了解锁更多、更强大的未知涌现能力。

### **4.2 LLM的教育体系——预训练与微调**

一个大型语言模型从诞生到应用于特定场景，通常要经历一个两阶段的“教育”过程：**预训练（Pre-training）和微调（Fine-tuning）**。我们可以用一个非常贴切的比喻来理解这个过程：一个人的成长与教育经历 ³⁶

。

**第一阶段：预训练——通识教育（General Education）**

这个阶段好比一个人从幼儿园到大学本科的通识教育过程 ³⁶。

- **教材**：模型使用的教材是前面提到的、涵盖互联网海量信息的巨大数据集。这是一套包罗万象的“通识教材”。

- **学习目标**：在这个阶段，模型的目标是学习语言本身最普遍、最基础的规律。它学习语法、事实知识、推理能力、不同文体的风格等。正如一个接受通识教育的学生，他会涉猎文学、历史、科学、艺术等多个领域。

- **学习方式**：主要是“自监督学习”（self-supervised learning）。在“预测下一个词”这个任务中，文本本身就提供了“标签”——每个词都是它前面所有词的“正确答案”。模型在这个过程中不断地自我纠错、自我提升 ³⁵。

- **成果**：经过漫长且耗资巨大的预训练后（通常需要数百万甚至数千万美元的计算资源）¹⁶，我们得到一个**“基础模型”（Foundation Model）**³⁵。这个模型就像一个知识渊博、通晓多种技能但“样样通，样样不精”的大学毕业生。它拥有广泛的常识和强大的通用能力，但对于任何一个具体的专业领域，它的知识深度可能还不够。

**第二阶段：微调——专业深造与在职培训（Specialized Education & Job Training）**

当基础模型“大学毕业”后，就可以根据具体的工作需求，进入“研究生院”或“公司”进行专业深造了 ³⁶。

- **教材**：微调使用的是一个规模小得多、但质量极高、领域高度相关的“专业教材”。例如，如果我们想让LLM成为一个医疗助手，我们就会用大量的医学教科书、临床指南和医疗文献来对它进行微调 ¹⁶。如果想让它成为一个公司的客服，就会用该公司的产品手册和历史客服对话记录来训练它。

- **学习目标**：目标不再是学习通用知识，而是让模型成为特定领域的“专家”。它需要学习该领域的专业术语、特有的行文风格和解决问题的逻辑。

- **成果**：经过微调后，通用的大语言模型就变成了一个**“专家模型”**。它在特定任务上的表现会远超未经微调的基础模型 ¹⁶。比如，一个经过法律文书微调的模型，在起草合同方面的能力会比通用的ChatGPT更强。

这个两阶段的教育体系是LLM能够被广泛应用的关键。预训练构建了强大的通用能力基础，使得我们不必为每个任务都从零开始训练一个模型，这极大地节约了成本。而微调则提供了定制化和专业化的途径，让同一个基础模型能够适配成千上万种不同的应用场景。

### **4.3 LLM动物园漫游——GPT、BERT、Llama及其伙伴**

“LLM”是一个类别，而非单一的产品，就像“哺乳动物”一样。在这个庞大的家族中，生活着各种各样的“物种”，它们由不同的公司或研究机构创造，拥有不同的设计哲学、优势和应用场景。要理解当前的LLM生态，我们需要从两个关键维度来区分它们：**核心目标**和**开放模式**。

**关键区别一：目标——“创作者” vs. “理解者”**

尽管都基于Transformer架构，但不同的模型家族在设计上有所侧重，这主要体现在它们使用的是Transformer的哪个部分。

- **BERT家族（理解者/分析师）**：代表模型是Google开发的BERT（Bidirectional Encoder Representations from Transformers）。

  - **核心技术**：BERT主要使用Transformer的**编码器（Encoder）部分。它的关键特性是“双向性”（Bidirectional）**，即在处理一个词时，它能同时考虑这个词左边和右边的所有上下文 ³⁷。这就像一个侦探在阅读证词时，会通读全文，反复推敲，以求最深刻、最准确地理解每个词的含义。

  - **擅长任务**：这种深刻的上下文理解能力，使BERT非常适合执行**“理解型”**任务，例如：改进搜索引擎对用户查询意图的理解、进行情感分析（判断文本是积极还是消极）、以及文本分类 ³⁸。BERT的目标不是写一篇新文章，而是分析和理解一篇已有的文章。

- **GPT家族（创作者/生成者）**：代表模型是OpenAI开发的GPT（Generative Pre-trained Transformer）系列。

  - **核心技术**：GPT主要使用Transformer的**解码器（Decoder）部分。它的特性是“自回归”（Autoregressive）或“单向性”（Unidirectional）**，即它总是从左到右，根据已经生成的词来预测下一个词 ³⁷。这就像一个作家在写作，他会根据已经写下的句子，构思接下来最合适的词语。

  - **擅长任务**：这种设计使GPT成为**“生成型”**任务的大师。它能够写出流畅、连贯且富有创造性的文本，因此在聊天机器人（如ChatGPT）、内容创作、文章摘要、代码生成等领域大放异彩 ³⁷。

**关键区别二：访问模式——“封闭” vs. “开放”**

除了技术路线，商业和研究模式也导致了LLM世界的分化。

- **封闭/专有模型（Proprietary Models）**：以OpenAI的GPT系列为典型代表。

  - **模式**：这些模型是“黑箱”。普通用户和开发者可以通过API（应用程序编程接口）付费调用模型的能力，但无法获取模型本身，也无法查看或修改其内部的参数（权重）³⁸。

  - **比喻**：这就像租用一辆高性能的法拉利。你可以驾驶它，体验它的强大性能，但你不能打开引擎盖去研究它的构造，更不能对它进行改装 ⁴⁰。你只是一个服务的使用者。

- **开放权重模型（Open-Weight Models）**：以Meta的Llama系列为主要代表。

  - **模式**：这些模型会公开发布其参数（权重）³⁸。这意味着研究人员、开发者和企业可以  
    **免费下载整个模型**，在自己的服务器上运行，并根据自己的需求对其进行深度的微调和定制 ⁴¹。

  - **比喻**：这就像汽车制造商不仅卖给你一辆车，还把引擎的设计图纸和核心部件都给了你。你可以基于这个强大的引擎，去打造一辆完全符合自己需求的定制赛车。

  - **需要注意**：虽然常被称为“开源”，但“开放权重”的模式并不完全等同于传统意义上的开源软件。因为模型的训练数据和训练方法等核心资产通常仍然是保密的 ⁴²。

为了更清晰地梳理这些差异，下表总结了主流LLM“物种”的特点：

| 模型家族  | 核心目标   | 核心架构   | 典型用例                           | 访问模式 |
|-----------|------------|------------|------------------------------------|----------|
| **BERT**  | 理解与分析 | 双向编码器 | 搜索引擎优化、情感分析、文本分类   | 开源     |
| **GPT**   | 生成与创作 | 单向解码器 | 聊天机器人、内容写作、代码生成     | 专有API  |
| **Llama** | 生成与创作 | 单向解码器 | 学术研究、企业定制化微调、设备端AI | 开放权重 |

这个“动物园”中的多样性，反映了AI领域健康而充满活力的生态。不存在一个“最好”的模型，只有“最适合”的模型。选择哪一个，取决于你的具体目标（是需要一个分析师还是一个创作者？）、你的资源（能承担昂贵的API费用，还是希望在自己的硬件上部署？），以及你对定制化和数据隐私的需求。理解这些根本性的差异，是在这个由AI驱动的新时代做出明智决策的第一步。

## **第五部分：与巨人共存——希望、风险与前路**

我们已经攀登了LLM的科技树，从其根基深入到了繁茂的树冠。现在，是时候从树上下来，回到地面，审视这些技术巨人在现实世界中投下的光明与阴影了。理解LLM的潜力固然令人兴奋，但同样重要的是，要清醒地认识到它们固有的风险，并展望它们未来的发展方向。这对于我们负责任地使用这项变革性技术至关重要。

### **5.1 森林中的阴影——幻觉与偏见**

在与LLM的互动中，用户很快会发现两个如影随形的“幽灵”：**幻觉（Hallucination）和偏见（Bias）**。它们并非可以轻易修复的“程序bug”，而是源于LLM核心设计和训练方式的根本性问题。

**风险一：幻觉——自信地胡说八道**

- **定义**：LLM幻觉指的是模型生成了语法通顺、语气自信、看似合理的文本，但其内容却是与事实不符、凭空捏造或毫无逻辑的 ⁴⁴。这是LLM最令人困惑和担忧的特性之一。

- **原因**：要理解幻觉的根源，我们必须回到LLM最根本的训练目标：**预测下一个最符合统计概率的词，而非陈述客观真理** ⁴⁶。LLM本质上是一个极其复杂的模式匹配器和文本续写器，而不是一个拥有事实核查机制的知识库。

- **比喻**：一个LLM就像一个博闻强记但缺乏真正理解力的学生。他读完了图书馆里所有的书，能惟妙惟肖地模仿任何一种写作风格。但当被问到一个处于他知识边缘的问题时，他不会承认“我不知道”，而是会利用他掌握的语言模式，**自信地“编造”出一个听起来最合理的答案**，以填补知识的空白 ⁴⁶。

- **现实案例**：

  - 在学术研究中，LLM可能会引用一篇根本不存在的论文，甚至连作者和期刊都编得有模有样 ⁴⁶。

  - 在法律咨询中，曾有律师使用ChatGPT进行案例研究，结果聊天机器人捏造了多个虚假的法律判例，导致该律师在法庭上受到严厉制裁。

  - 在代码生成中，模型可能会建议使用一个看起来非常合理但实际上并不存在的函数或API，让开发者掉入陷阱 ⁴⁶。

**风险二：偏见——一面有瑕疵的镜子**

- **定义**：由于LLM的“教材”是来自互联网的海量人类语言数据，它们不可避免地会学习、复制甚至放大这些数据中存在的各种社会偏见，包括与性别、种族、宗教、年龄、职业等相关的刻板印象 ⁴⁸。

- **原因**：这背后是计算机科学领域一个古老的原则：**“垃圾进，垃圾出”（Garbage in, garbage out）**⁵⁰。LLM就像一面镜子，忠实地反映了我们人类社会的集体思想，其中既有智慧的光辉，也有偏见的阴暗。如果训练数据中充斥着某种偏见，模型为了更好地预测文本，就必须学会这种偏见。

- **现实案例**：

  - 多项研究发现，LLM在被要求描述不同职业时，会表现出强烈的性别偏见，比如将“医生”、“工程师”与男性关联，将“护士”、“秘书”与女性关联 ⁵¹。

  - 在招聘场景中，模型可能更倾向于为带有白人男性名字的简历推荐高管职位，而为带有其他族裔或女性名字的简历推荐基层职位 ⁵¹。

  - 在内容审核中，模型可能会不成比例地将非裔美国人白话英语（AAVE）标记为“有毒”或“攻击性”言论，因为它在训练数据中学到了这种语言模式与负面内容的错误关联 ⁴⁹。

深刻地认识到幻觉和偏见并非偶然的“失误”，而是当前技术范式下的**内生性风险**，是走向成熟AI观的关键一步。只要LLM的核心任务仍然是基于统计的模式匹配，只要它的主要食粮仍然是反映着人类社会不完美一面的互联网数据，这两个问题就将持续存在。

这意味着，解决方案并非一劳永逸地“修复模型”，而是需要建立一整套**风险缓释系统**。例如，为了对抗幻觉，研究人员开发了**“检索增强生成”（Retrieval-Augmented Generation, RAG）**技术，即在生成答案前，先让模型从一个可信的、最新的知识库（如公司的内部文档）中检索相关信息，并基于这些事实来组织回答，从而大大减少胡编乱造的可能性 ¹⁶。而为了对抗偏见，则需要持续不断地进行数据清洗、模型对齐（通过人类反馈来校正模型的价值观）以及严格的偏见检测 ⁵¹。我们必须像对待一个能力超群但心智尚不成熟的“巨人”一样，为它设定清晰的边界和护栏。

### **5.2 最新的萌芽——多模态与AI智能体**

尽管存在风险，LLM科技树的生长并未停滞。相反，它正朝着两个激动人心的方向伸出新的枝芽，预示着一个远超纯文本交互的未来。这两个方向分别是：**多模态（Multimodality）和AI智能体（AI Agents）**。

**未来方向一：多模态——超越文本的感知**

- **定义**：多模态AI指的是能够同时处理、理解和生成多种**“模态”（modality）**或数据类型信息的模型。这些模态不仅包括文本，还涵盖了**图像、音频、视频**等 ⁵²。

- **比喻**：这就像人类交流方式的进化。我们最早只有文字（书信），后来有了图像（图画书），再后来有了声音（广播），最终有了视频（电影）。传统的LLM就像一个只能读写书信的笔友。而多模态LLM则像一个现代人，能够通过智能手机，无缝地在文字、图片、语音和视频之间切换，进行更丰富、更立体的交流 ⁵²。

- **工作原理（简化版）**：其核心思想是**“通译”**。系统会为每一种模态（如图像、音频）配备一个专门的“编码器”，这个编码器的任务就是将该模态的信息翻译成一种通用的数学语言——即我们前面提到的“嵌入向量”。然后，来自不同模态的嵌入向量会被“融合”（fuse）在一起，送入LLM的核心进行统一的推理和处理 ⁵⁵。

- **应用场景**：

  - **看图说话**：你可以上传一张家庭聚会的照片，然后问模型：“照片里穿红色裙子的小女孩在做什么？”模型能够理解你的问题，识别照片内容，并回答：“她正在吹生日蛋糕上的蜡烛。”

  - **文生图/视频**：你只需输入一段文字描述，如“一只穿着宇航服的柯基犬在月球上行走，数字艺术风格”，模型就能生成对应的图像或短视频。

  - **医疗诊断**：医生可以口述病人的症状，同时上传病人的X光片。多模态模型可以结合语音信息和影像分析，给出初步的诊断建议 ⁵²。

**未来方向二：AI智能体——超越聊天的行动**

- **定义**：AI智能体是一个以LLM为核心**“大脑”**或推理引擎的系统，它能够自主地规划步骤、使用工具，并执行任务以达成一个设定的目标 ⁵⁷。

- **比喻**：如果说一个标准的LLM是一个被困在瓶子里的、绝顶聪明的“精灵”，它能回答你所有问题，但无法离开瓶子。那么，一个AI智能体就是被赋予了**“手和脚”**的精灵，它能走出瓶子，在数字世界（甚至物理世界）中为你办事。

- **工作原理（简化版）**：智能体的运作流程通常是：

  1.  **目标设定**：你给智能体一个高层次的目标，例如：“帮我规划下周去巴黎的五日游，预算5000元。”

  2.  **规划分解**：LLM大脑会将这个复杂目标分解成一系列可执行的子任务，例如：(1) 搜索下周往返巴黎的机票；(2) 查找符合预算且评价高的酒店；(3) 规划每日的游览路线；(4) 预订门票和餐厅。

  3.  **工具使用**：为了完成这些任务，智能体会调用各种**“工具”**。这些工具可以是外部的API、软件或网站，比如使用搜索引擎查机票、调用酒店预订网站的API、访问地图应用规划路线等 ⁵⁷。

  4.  **执行与迭代**：智能体执行任务，获取结果，并根据结果不断调整后续计划，直到最终完成你设定的目标。

如果说我们迄今为止所描述的科技树，其主干是关于如何精通**语言**，那么未来的发展方向，则是关于如何将这种强大的语言智能与两样东西连接起来：**对多感官世界的感知能力**和**在真实世界中采取行动的能力**。

多模态技术为LLM装上了“眼睛”和“耳朵”，让它能够“看”和“听”，从而理解这个由图像和声音构成的物理世界。AI智能体技术则为LLM装上了“手”和“脚”，让它能够将思考转化为行动，去操作软件、调用服务、完成任务。

这两个趋势的融合，预示着LLM正在经历一场深刻的进化：从一个大型**语言**模型（Large **Language** Model），逐渐演变为一个大型**行动**模型（Large **Action** Model），乃至一个更通用的**大型智能模型**。这不仅是科技树上长出的新枝，更可能代表着一个全新的、智能与世界深度融合的时代的开端。

### **结论：在新世界中航行**

我们从人工智能这片广袤的森林出发，沿着机器学习和深度学习的路径，深入探索了支撑起现代AI的Transformer架构及其核心的自注意力机制。我们见证了参数和数据如何共同催生出“大型”语言模型这一技术奇观，并了解了它们如同人类般的“教育”历程。我们还漫步于LLM的“动物园”，认识了不同设计哲学下的模型家族，并直面了它们带来的幻觉与偏见等深刻挑战。最后，我们眺望了远方，看到了通往多模态感知和智能体行动的未来之路。

这段旅程的核心目的，是剥去环绕在AI周围的神秘光环。希望通过这次从零开始的系统性梳理，您能够认识到，LLM并非无法理解的“魔法黑箱”，而是一棵根植于数学、逻辑和数据之上的、有着清晰生长脉络的科技树。

掌握了这棵树的结构，从它的根基到最新的枝芽，您便拥有了一张导航地图。当未来再有新的技术名词或产品出现时——无论是更强大的模型、更巧妙的风险控制方法，还是更惊人的应用——您将能够把它放到这棵树的相应位置上，理解它的来龙去脉，判断它的意义所在。

我们正处在一个由AI深刻重塑的时代。理解这项技术，不再仅仅是技术专家的任务，而是每一个希望在新世界中把握航向的现代人的必修课。带着这份新获得的知识框架，您已准备好，去更加自信、审慎和富有洞察力地参与到这场关乎我们所有人的伟大变革之中。

#### Works cited

1.  Understanding The Difference Between AI, ML, And DL: Using An ..., accessed July 2, 2025, [*https://www.advancinganalytics.co.uk/blog/2021/12/15/understanding-the-difference-between-ai-ml-and-dl-using-an-incredibly-simple-example*](https://www.advancinganalytics.co.uk/blog/2021/12/15/understanding-the-difference-between-ai-ml-and-dl-using-an-incredibly-simple-example)

2.  AI, Machine Learning, and Deep Learning: Key Differences Explained - Skiplevel, accessed July 2, 2025, [*https://www.skiplevel.co/blog/ai-machine-deep-learning*](https://www.skiplevel.co/blog/ai-machine-deep-learning)

3.  The Difference Between AI, ML and DL - CENGN, accessed July 2, 2025, [*https://www.cengn.ca/information-centre/innovation/difference-between-ai-ml-and-dl/*](https://www.cengn.ca/information-centre/innovation/difference-between-ai-ml-and-dl/)

4.  What's the relationship of AI, ML, DL and Generative AI? \| by Jerel Velarde - Medium, accessed July 2, 2025, [*https://medium.com/@jereljohnvelarde/whats-the-relationship-of-ai-ml-dl-and-generative-ai-1f4c8295432a*](https://medium.com/@jereljohnvelarde/whats-the-relationship-of-ai-ml-dl-and-generative-ai-1f4c8295432a)

5.  Relationship between AI, Machine Learning, Deep Learning & Data Science? - Corpnce, accessed July 2, 2025, [*https://www.corpnce.com/relationship-ai-ml-dl-ds/*](https://www.corpnce.com/relationship-ai-ml-dl-ds/)

6.  What Is Deep Learning and How Does It Work? - Built In, accessed July 2, 2025, [*https://builtin.com/machine-learning/deep-learning*](https://builtin.com/machine-learning/deep-learning)

7.  什么是自然语言处理？- NLP 简介- AWS, accessed July 2, 2025, [*https://aws.amazon.com/cn/what-is/nlp/*](https://aws.amazon.com/cn/what-is/nlp/)

8.  语言智能的新发展与新挑战 - 科技频道, accessed July 2, 2025, [*https://tech.gmw.cn/2023-02/20/content_36377739.htm*](https://tech.gmw.cn/2023-02/20/content_36377739.htm)

9.  自然语言处理的第一步：算法如何理解文本 - NVIDIA Developer, accessed July 2, 2025, [*https://developer.nvidia.com/zh-cn/blog/natural-language-processing-first-steps-how-algorithms-understand-text/*](https://developer.nvidia.com/zh-cn/blog/natural-language-processing-first-steps-how-algorithms-understand-text/)

10. 语言认知与语言计算– 人与机器的语言理解 - 模式识别国家重点实验室, accessed July 2, 2025, [*https://nlpr.ia.ac.cn/cip/ZongPublications/2022/2022%E7%8E%8B%E5%B0%91%E6%A5%A0-%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6.pdf*](https://nlpr.ia.ac.cn/cip/ZongPublications/2022/2022%E7%8E%8B%E5%B0%91%E6%A5%A0-%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%AD%A6.pdf)

11. How Do Large Language Models Work? Conceptual But Non Technical Explanation, accessed July 2, 2025, [*https://medium.com/@Gbgrow/how-do-large-language-models-work-conceptual-but-non-technical-explanation-ea369334d32e*](https://medium.com/@Gbgrow/how-do-large-language-models-work-conceptual-but-non-technical-explanation-ea369334d32e)

12. 什么是RNN？– 循环神经网络简介– AWS, accessed July 2, 2025, [*https://aws.amazon.com/cn/what-is/recurrent-neural-network/*](https://aws.amazon.com/cn/what-is/recurrent-neural-network/)

13. 什麼是RNN？– 遞歸神經網路介紹 - AWS, accessed July 2, 2025, [*https://aws.amazon.com/tw/what-is/recurrent-neural-network/*](https://aws.amazon.com/tw/what-is/recurrent-neural-network/)

14. 什么是循环神经网络(RNN)？ - IBM, accessed July 2, 2025, [*https://www.ibm.com/cn-zh/think/topics/recurrent-neural-networks*](https://www.ibm.com/cn-zh/think/topics/recurrent-neural-networks)

15. The Transformer Attention Mechanism - MachineLearningMastery.com, accessed July 2, 2025, [*https://machinelearningmastery.com/the-transformer-attention-mechanism/*](https://machinelearningmastery.com/the-transformer-attention-mechanism/)

16. What Can Large Language Models (LLMs) Be Used For? \| deepset Blog, accessed July 2, 2025, [*https://www.deepset.ai/blog/large-language-models-enterprise-use*](https://www.deepset.ai/blog/large-language-models-enterprise-use)

17. Transformer架構- 維基百科，自由的百科全書, accessed July 2, 2025, [*https://zh.wikipedia.org/zh-tw/Transformer%E6%9E%B6%E6%9E%84*](https://zh.wikipedia.org/zh-tw/Transformer%E6%9E%B6%E6%9E%84)

18. 黄仁勋集齐Transformer论文七大作者，对话一小时，干货满满 - 华尔街见闻, accessed July 2, 2025, [*https://wallstreetcn.com/articles/3710964*](https://wallstreetcn.com/articles/3710964)

19. A Beginner's Guide to Self-Attention in Transformers \| by Nacho Zobian \| Medium, accessed July 2, 2025, [*https://medium.com/@nachozobian/a-beginners-guide-to-self-attention-in-transformers-baf71a971efd*](https://medium.com/@nachozobian/a-beginners-guide-to-self-attention-in-transformers-baf71a971efd)

20. Understanding and Coding the Self-Attention Mechanism of Large Language Models From Scratch - Sebastian Raschka, accessed July 2, 2025, [*https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html*](https://sebastianraschka.com/blog/2023/self-attention-from-scratch.html)

21. Understanding Transformer Attention Mechanisms : Attention Is All You Need \| by Tahir \| Medium, accessed July 2, 2025, [*https://medium.com/@tahirbalarabe2/understanding-transformer-attention-mechanisms-attention-is-all-you-need-2a5dd89196ab*](https://medium.com/@tahirbalarabe2/understanding-transformer-attention-mechanisms-attention-is-all-you-need-2a5dd89196ab)

22. LLM Transformer Model Visually Explained - Polo Club of Data Science, accessed July 2, 2025, [*https://poloclub.github.io/transformer-explainer/*](https://poloclub.github.io/transformer-explainer/)

23. \[D\] How to truly understand attention mechanism in transformers? : r/MachineLearning - Reddit, accessed July 2, 2025, [*https://www.reddit.com/r/MachineLearning/comments/qidpqx/d_how_to_truly_understand_attention_mechanism_in/*](https://www.reddit.com/r/MachineLearning/comments/qidpqx/d_how_to_truly_understand_attention_mechanism_in/)

24. Understanding The Attention Mechanism In Transformers: A 5-minute visual guide. - Reddit, accessed July 2, 2025, [*https://www.reddit.com/r/compsci/comments/1cjc318/understanding_the_attention_mechanism_in/*](https://www.reddit.com/r/compsci/comments/1cjc318/understanding_the_attention_mechanism_in/)

25. \[D\] How does 'self-attention' work in transformer models? : r/MachineLearning - Reddit, accessed July 2, 2025, [*https://www.reddit.com/r/MachineLearning/comments/16q8pwa/d_how_does_selfattention_work_in_transformer/*](https://www.reddit.com/r/MachineLearning/comments/16q8pwa/d_how_does_selfattention_work_in_transformer/)

26. \[draft\] Note 10: Self-Attention & Transformers 1, accessed July 2, 2025, [*https://web.stanford.edu/class/cs224n/readings/cs224n-self-attention-transformers-2023_draft.pdf*](https://web.stanford.edu/class/cs224n/readings/cs224n-self-attention-transformers-2023_draft.pdf)

27. What is LLM? - Large Language Models Explained - AWS, accessed July 2, 2025, [*https://aws.amazon.com/what-is/large-language-model/*](https://aws.amazon.com/what-is/large-language-model/)

28. Understanding LLMs: Model size, training data, and tokenization - Outshift - Cisco, accessed July 2, 2025, [*https://outshift.cisco.com/blog/understanding-llms-model-size-training-data-tokenization*](https://outshift.cisco.com/blog/understanding-llms-model-size-training-data-tokenization)

29. What are LLM Parameters? Explained Simply - Deepchecks, accessed July 2, 2025, [*https://www.deepchecks.com/glossary/llm-parameters/*](https://www.deepchecks.com/glossary/llm-parameters/)

30. LLM Parameters Explained - The Cloud Girl, accessed July 2, 2025, [*https://www.thecloudgirl.dev/blog/llm-parameters-explained*](https://www.thecloudgirl.dev/blog/llm-parameters-explained)

31. What exactly are parameters? : r/learnmachinelearning - Reddit, accessed July 2, 2025, [*https://www.reddit.com/r/learnmachinelearning/comments/1dz7w1y/what_exactly_are_parameters/*](https://www.reddit.com/r/learnmachinelearning/comments/1dz7w1y/what_exactly_are_parameters/)

32. A Brief Guide To LLM Numbers: Parameter Count vs. Training Size \| by Greg Broadhead, accessed July 2, 2025, [*https://gregbroadhead.medium.com/a-brief-guide-to-llm-numbers-parameter-count-vs-training-size-894a81c9258*](https://gregbroadhead.medium.com/a-brief-guide-to-llm-numbers-parameter-count-vs-training-size-894a81c9258)

33. LLMs vs. SLMs: The Differences in Large & Small Language Models \| Splunk, accessed July 2, 2025, [*https://www.splunk.com/en_us/blog/learn/language-models-slm-vs-llm.html*](https://www.splunk.com/en_us/blog/learn/language-models-slm-vs-llm.html)

34. An explanation of large language models - TechTarget, accessed July 2, 2025, [*https://www.techtarget.com/whatis/video/An-explanation-of-large-language-models*](https://www.techtarget.com/whatis/video/An-explanation-of-large-language-models)

35. Large language models: their history, capabilities and limitations - Snorkel AI, accessed July 2, 2025, [*https://snorkel.ai/large-language-models/*](https://snorkel.ai/large-language-models/)

36. Pre-training, Fine-tuning, and Transfer learning. To make these ideas more relatable, let's use a real-world analogy - DEV Community, accessed July 2, 2025, [*https://dev.to/sreeni5018/pre-training-fine-tuning-and-transfer-learning-to-make-these-ideas-more-relatable-lets-use-a-real-world-analogy-3d0o*](https://dev.to/sreeni5018/pre-training-fine-tuning-and-transfer-learning-to-make-these-ideas-more-relatable-lets-use-a-real-world-analogy-3d0o)

37. Bert vs gpt vs llama: understanding the best AI model for your needs - BytePlus, accessed July 2, 2025, [*https://www.byteplus.com/en/topic/560409*](https://www.byteplus.com/en/topic/560409)

38. 7 Popular LLMs Explained in 7 Minutes: GPT, BERT, LLaMA & More \| by Rohan Mistry \| Jun, 2025 \| Medium, accessed July 2, 2025, [*https://medium.com/@rohanmistry231/7-popular-llms-explained-in-7-minutes-gpt-bert-llama-more-239807219f6f*](https://medium.com/@rohanmistry231/7-popular-llms-explained-in-7-minutes-gpt-bert-llama-more-239807219f6f)

39. BERT vs. GPT: What's the Difference? - Coursera, accessed July 2, 2025, [*https://www.coursera.org/articles/bert-vs-gpt*](https://www.coursera.org/articles/bert-vs-gpt)

40. Your AI terminology cheat sheet: GPT, ChatGPT, LLaMa, Alpaca, Bard, LLMs - Karbon, accessed July 2, 2025, [*https://karbonhq.com/resources/generative-ai-terminology-cheat-sheet/*](https://karbonhq.com/resources/generative-ai-terminology-cheat-sheet/)

41. Llama vs GPT: Comparing Open-Source Versus Closed-Source AI Development - Netguru, accessed July 2, 2025, [*https://www.netguru.com/blog/gpt-4-vs-llama-2*](https://www.netguru.com/blog/gpt-4-vs-llama-2)

42. No, Llama 2 is NOT an open source LLM : r/LocalLLaMA - Reddit, accessed July 2, 2025, [*https://www.reddit.com/r/LocalLLaMA/comments/153i6vi/no_llama_2_is_not_an_open_source_llm/*](https://www.reddit.com/r/LocalLLaMA/comments/153i6vi/no_llama_2_is_not_an_open_source_llm/)

43. Open Source LLMs: Llama and Its Competitors \| Michigan Online, accessed July 2, 2025, [*https://online.umich.edu/collections/artificial-intelligence/short/open-source-llms-llama-and-its-competitors/*](https://online.umich.edu/collections/artificial-intelligence/short/open-source-llms-llama-and-its-competitors/)

44. www.lakera.ai, accessed July 2, 2025, [*https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models#:~:text=Hallucinations%20in%20LLMs%20refer%20to,trust%20placed%20in%20these%20models.*](https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models#:~:text=Hallucinations%20in%20LLMs%20refer%20to,trust%20placed%20in%20these%20models.)

45. What are LLM Hallucinations? - Iguazio, accessed July 2, 2025, [*https://www.iguazio.com/glossary/llm-hallucination/*](https://www.iguazio.com/glossary/llm-hallucination/)

46. LLM Hallucinations Explained. LLMs like the GPT family, Claude… \| by Nirdiamant - Medium, accessed July 2, 2025, [*https://medium.com/@nirdiamant21/llm-hallucinations-explained-8c76cdd82532*](https://medium.com/@nirdiamant21/llm-hallucinations-explained-8c76cdd82532)

47. When LLMs day dream: Hallucinations and how to prevent them - Red Hat, accessed July 2, 2025, [*https://www.redhat.com/en/blog/when-llms-day-dream-hallucinations-how-prevent-them*](https://www.redhat.com/en/blog/when-llms-day-dream-hallucinations-how-prevent-them)

48. Bias and Fairness in Large Language Models: A Survey - MIT Press Direct, accessed July 2, 2025, [*https://direct.mit.edu/coli/article/50/3/1097/121961/Bias-and-Fairness-in-Large-Language-Models-A*](https://direct.mit.edu/coli/article/50/3/1097/121961/Bias-and-Fairness-in-Large-Language-Models-A)

49. Bias in Large Language Models: Origin, Evaluation, and Mitigation - arXiv, accessed July 2, 2025, [*https://arxiv.org/html/2411.10915v1*](https://arxiv.org/html/2411.10915v1)

50. Data bias in LLM and generative AI applications - Mostly AI, accessed July 2, 2025, [*https://mostly.ai/blog/data-bias-types*](https://mostly.ai/blog/data-bias-types)

51. Explicitly unbiased large language models still form biased associations - PNAS, accessed July 2, 2025, [*https://www.pnas.org/doi/10.1073/pnas.2416228122*](https://www.pnas.org/doi/10.1073/pnas.2416228122)

52. Exploring Multimodal LLMs? Applications, Challenges, and How They Work - Shaip, accessed July 2, 2025, [*https://www.shaip.com/blog/multimodal-large-language-models-mllms/*](https://www.shaip.com/blog/multimodal-large-language-models-mllms/)

53. A Comprehensive Guide to Multimodal LLMs and How they Work - Ionio, accessed July 2, 2025, [*https://www.ionio.ai/blog/a-comprehensive-guide-to-multimodal-llms-and-how-they-work*](https://www.ionio.ai/blog/a-comprehensive-guide-to-multimodal-llms-and-how-they-work)

54. What is multimodal AI: Complete overview 2025 \| SuperAnnotate, accessed July 2, 2025, [*https://www.superannotate.com/blog/multimodal-ai*](https://www.superannotate.com/blog/multimodal-ai)

55. How Multimodal LLMs Work - The Vision Story - Analytics Vidhya, accessed July 2, 2025, [*https://www.analyticsvidhya.com/blog/2025/06/multimodal-llm/*](https://www.analyticsvidhya.com/blog/2025/06/multimodal-llm/)

56. What is Multimodal AI? - DataCamp, accessed July 2, 2025, [*https://www.datacamp.com/blog/what-is-multimodal-ai*](https://www.datacamp.com/blog/what-is-multimodal-ai)

57. What are AI agents? Definition, examples, and types \| Google Cloud, accessed July 2, 2025, [*https://cloud.google.com/discover/what-are-ai-agents#:~:text=Model%3A%20Large%20language%20models%20(LLMs,components%20facilitate%20reason%20and%20action.*](https://cloud.google.com/discover/what-are-ai-agents#:~:text=Model%3A%20Large%20language%20models%20(LLMs,components%20facilitate%20reason%20and%20action.)
