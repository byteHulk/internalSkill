## 跳表 -- SkipList

#### 优点
跳表通过增加多级索引的方式把查找节点的时间复杂度降低到了O(log2n)

#### 缺点
由于多次删改跳表的元素，导致索引跨度不稳定，维护复杂度提升 O(log2n)

#### 时间复杂度 Time complexity

- prepend O(1)

- append O(1)

- lookup O(log2n)

- insert O(1)

- delete O(1)

#### 空间复杂度 Spatial complexity
- 跳表空间复杂度是 O(n)

#### 经典场景

- Redis选择使用跳表来实现有序集合