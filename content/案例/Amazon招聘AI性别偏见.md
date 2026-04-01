---
title: "Amazon招聘AI：性别偏见灾难"
slug: "amazon-hiring-ai-bias"
时代: "[[时代8：生成式 AI]]"
维度:
  - "[[维度：D-制度滞后]]"
  - "[[维度：F-文化冲击]]"
年份: 2015
涉及人物:
  - "[[Amazon]]"
关键书籍: []
类比: []
模式: []
制度分组: "信息资本主义"
信息质量: 2
状态: draft
---

# Amazon招聘AI：性别偏见灾难

> 2014年，Amazon启动了一个AI招聘工具，目标自动化招聘工程师的过程。2015年，Amazon发现了一个问题——该工具系统性地降级了女性候选人的排名。它惩罚了包含"women's"的简历，如"women's象棋俱乐部队长"，并青睐包含"executed"的动词，这些动词更常见于男性工程师的简历。到2018年，Amazon放弃了该项目。

## 故事

Amazon构建了一个机器学习模型来审查招聘简历。该模型在10年的Amazon历史数据上进行了训练——过去应聘的简历及其结果。大多数简历来自男性（反映了科技产业的男性主导）。

模型学到了什么它从数据中看到的：男性简历通常被雇用。女性简历通常不被雇用。但相关关系并不因果。原因是历史歧视，不是因为女性是更差的候选人。但模型不知道这个细微差别。它只是复制了模式。

系统学会了惩罚：
- 包含"women's"的简历（如女性编码俱乐部或女性技术活动）
- 来自女性大学的毕业生
- 女性应聘者更常使用的动词

它青睐：
- 包含"executed"的动词和"captured"
- 来自技术男性主导的学校的毕业生
- 用"男性"行为描述的简历

Amazon试图"修复"这个问题——编辑一些关键词使其中立——但他们意识到机器学习系统会自动找到歧视的新方式。该系统本质上是有缺陷的。2018年，Amazon放弃了它。

这个故事变成了关于AI偏见的标准案例研究。它展示了AI如何可以规模化地复制人类偏见。

## 分析

### 维度归属

**D-制度滞后**：公司有非歧视法律和平等就业机会政策。但这些法律是基于人类招聘人员的想法。AI招聘法律框架还不存在。当发现偏见时，没有清晰的法律路径。制度跟不上。

**F-文化冲击**：Amazon的故事改变了人们对AI的看法。AI不是客观的。它可以像人类一样有偏见。这导致了关于算法公平性、解释性和人工监督的文化讨论。

### 跨时代类比

- 与 [[Deep Blue击败卡斯帕罗夫]] 对比——Deep Blue赢了，这被视为AI进步。Amazon失败了，这被视为AI危险。成功和失败都改变了文化。

## 来源
- [Amazon scraps secret AI recruiting tool - CNBC](https://www.cnbc.com/2018/10/10/amazon-scraps-a-secret-ai-recruiting-tool-that-showed-bias-against-women.html)
- [Why Amazon's Automated Hiring Tool Discriminated Against Women - ACLU](https://www.aclu.org/news/womens-rights/why-amazons-automated-hiring-tool-discriminated-against-women)
- [Case Study: How Amazon's AI Recruiting Tool Learnt Gender Bias - Cut the SaaS](https://cut-the-saas.com/ai/case-study-how-amazons-ai-recruiting-tool-learnt-gender-bias)
