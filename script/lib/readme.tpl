本仓库用于记录和分享学习算法和数据结构的过程.

## 算法题分类

{{ quesForType.map((ques) => { }}
> 题目类型 - ${ques.type}

| &emsp;题号&emsp; | &emsp;难度&emsp; | 题目链接&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|答案链接&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;| 红黑豆 |
| :--: | :--: | :----------------------------------------------------------- |:----------------------------------------------------------- | :------: |
{{ ques.data.map((q) => { }}|  ${q.id}  | ${q.level} | [${q.trans}](https://leetcode-cn.com/problems/${q.title}/) | [${q.title}](https://github.com/byteHulk/internalSkill/blob/main/src/_build/${q.title}.md)                                                             |    {{ q.times.map((time) => { }}{{if(time){}}🔴 {{ }else{ }}⚫ {{ } }}{{ }) }}   |
{{ }) }}
{{ }) }}