---
title: "手撕类氢原子薛定谔方程：角动量算符的本征函数（2）"
description: "变量分离后的角动量算符的第二部分的本征函数"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

回顾一下上一节得到的方程：

$$
\left( 1 - w^2 \right) \frac{\partial ^2 G}{\partial w^2} - 2w \frac{\partial G}{\partial w} + \left(\frac{c}{\hbar^2} - \frac{m^2}{1 - w^2} \right)G = 0
$$

对这个方程我们可以考虑级数解，但是有一项 $m^2 / (1 - w^2) G$ 看起来没办法在级数里被消掉。所以我们可以考虑 $G(w) = (1-w^2)^t H(w)$，这样做的意图是把 $m^2 / (1 - w^2) G$ 消掉，同时所有项前面都是 $w$ 的多项式，于是很自然地想到应该把 $G$ 写成 $(1-w^2)$ 的某个半整数或整数次方乘上一个多项式加和的形式。那么，$t$ 取多少才能构造出一个好解的方程呢？代入看看。

$$
\begin{aligned}
\frac{\partial G}{\partial w} = & \frac{\partial }{\partial w} (1-w^2)^t H(w) \\
= & -2wt(1-w^2)^{(t-1)} H(w) + (1-w^2)^t H'(w)
\end{aligned}
$$

<!--yes-->

$$
\begin{aligned}
\frac{\partial^2 G}{\partial w^2} = & \frac{\partial }{\partial w} \left(
    -2wt(1-w^2)^{t-1} H(w) + (1-w^2)^t H'(w)
\right) \\
= & \left(
    -2t(1-w^2)^{t-1} + 4t(t-1)w^2(1-w^2)^{t-2}
\right) H(w) \\
& -2wt(1-w^2)^{t-1} H'(w) - 2wt(1-w^2)^{t-1} H'(w) + (1-w^2)^t H''(w) \\
= &  \left(
    -2t(1-w^2)^{t-1} + 4t(t-1)w^2(1-w^2)^{t-2}
\right) H(w) - 4wt(1-w^2)^{t-1} H'(w) + (1-w^2)^t H''(w)
\end{aligned}
$$ 

<!--yes-->

代回原方程

$$
\begin{aligned}
& (1-w^2) \left(
    \left( -2t(1-w^2)^{t-1} + 4t(t-1)w^2(1-w^2)^{t-2} \right) H(w) - 4wt(1-w^2)^{t-1} H'(w) + (1-w^2)^t H''(w)
\right) \\
& -2w \left( 
    -2wt(1-w^2)^{t-1} H(w) + (1-w^2)^t H'(w)
\right) + \left( \frac{c}{\hbar^2} (1-w^2)^t - m^2 (1-w^2)^{t-1} \right) H(w) = 0
\end{aligned}
$$

整理

$$
\begin{aligned}
& (1-w^2)^{t+1} H''(w) + \\
& \left( -4wt(1-w^2)^t -2w(1-w^2)^t 
\right)  H'(t) + \\
& \left(
    -2t (1-w^2)^t + 4t(t-1) w^2 (1-w^2)^{t-1} + 4w^2 t (1-w^2)^{t-1} + \frac{c}{\hbar^2} (1-w^2)^t - m^2 (1-w^2)^{t-1}
\right) H(w) \\
& = 0
\end{aligned}
$$

发现大多数项都有 $(1-w^2)^t$ 项或更高次数的项，因此我们尝试提一项 $(1-w^2)^t$ 。

$$
(1-w^2)^t \left( 
    \begin{aligned}
    & (1+w^2) H''(w) + (-4wt - 2w) H'(w) \\
    & + (-2t + \frac{4t^2 w^2 - 4 w^2 t}{1-w^2} + \frac{4w^2t}{1-w^2} + \frac{c}{\hbar^2} - \frac{m^2}{1-w^2}) H(w)
    \end{aligned}
\right) = 0
$$

$$
(1-w^2)^t \left( 
    \begin{aligned}
    & (1+w^2) H''(w) + (-4wt - 2w) H'(w) + (-2t + \frac{4t^2 w^2 - m^2}{1-w^2} + \frac{c}{\hbar^2} ) H(w)
    \end{aligned}
\right) = 0
$$

我们提到过的最难处理的一项是 $ (4t^2 w^2 - m^2)/(1-w^2)$ ，而我们完全可以令这项里的所有 $w^2$ 消去，成为一个与 $w$ 无关的常数项，这意味着使 $4t^2 = m^2$ ，也就是 $t = \left\vert m \right\vert / 2$ 。将这个结果代回上式，有

$$
(1 - w^2) H''(w) - 2w ( \left\vert m \right\vert +1) H'(w) + \left( \frac{c}{\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert  \right) H(w) = 0
$$

这是一个优美的、齐次的、多项式系数的二阶微分方程，我们毫不犹豫地采取级数解方法，设

$$
H(w) = \sum_{j = 0} a_j w^j 
$$

则有其导数和二阶导数


$$
H'(w) = \sum_{j = 0} (j+1) a_{j+1} w^j
$$

$$
H''(w) = \sum_{j=0} (j+1) (j+2) a_{j+2} w^j
$$

代回原式

$$
\sum_{j=0} (j+1) (j+2) a_{j+2} w^j - \sum_{j=0} (j+1) (j+2) a_{j+2} w^{j+2} \\ - 2(\left\vert m \right\vert +1) \sum_{j = 0} (j+1) a_{j+1} w^{j+1} + \left( \frac{c}{\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert  \right) \sum_{j = 0} a_j w^j = 0
$$

为了把所有相同指数的 $w^j$ 项加起来，需要单独考虑 $w^0$ 项和 $w^1$ 项，因为第二个求和号是从 $w^2$ 开始的。

$$
2a_2 + ( {c} / {\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert  )a_0 \\
+\left(6a_3  - 2(\left\vert m \right\vert +1) a_1  + ( {c} / {\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert) a_1\right) w\\
+\sum_{j=2} \left( (j+1)(j+2)a_{j+2} - j(j-1) a_j - 2(\left\vert m \right\vert +1)j a_{j} + ( {c} / {\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert  ) a_j \right) w^j = 0
$$

既然所有项都需要等于 $0$，我们写出三个方程

$$
2a_2 + ( {c} / {\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert  )a_0 = 0 \\
6a_3 + ( {c} / {\hbar^2} - \left\vert m \right\vert ^2 - 3 \left\vert m \right\vert -2) a_1 = 0 \\
(j+1)(j+2)a_{j+2} + ( {c} / {\hbar^2} - \left\vert m \right\vert ^2 - \left\vert m \right\vert -j^2 - j - 2\left\vert m \right\vert j ) a_j = 0, j \ge 2
$$

解得

$$
a_2 = \frac{1}{2} (\left\vert m \right\vert ^2 + \left\vert m \right\vert - c / \hbar^2 ) a_0 \\
a_3 = \frac{1}{6} (\left\vert m \right\vert ^2 + 3 \left\vert m \right\vert + 2 - c / \hbar^2) a_1 \\
a_{j+2} = \frac{j^2 + 2\left\vert m \right\vert j + \left\vert m \right\vert ^2 + j + \left\vert m \right\vert - c / \hbar^2}{(j+1)(j+2)} a_j
$$

对第三个式子整理一下

$$
a_{j+2} = \frac{(j+\left\vert m \right\vert )(j + \left\vert m \right\vert  + 1) - c / \hbar^2}{(j+1) (j+2)} a_j , j \ge 2
$$

观察发现 $j=0, j=1$ 时表达式与第三个式子一致，因此可以总结出系数的递推公式

$$
a_{j+2} = \frac{(j+\left\vert m \right\vert )(j + \left\vert m \right\vert  + 1) - c / \hbar^2}{(j+1) (j+2)} a_j
$$

偶数次和级数次的系数分别与 $a_0, a_1$ 有关。但是这个级数是不收敛的（悲），这是容易证明的。因此我们希望，在某一第 $k$ 项后，所有的系数都等于 $0$，这样这个函数就是一个简单的多项式，一定是收敛的。

为了达到这个目的，我们可以令：

1. $a_0=0$ 或 $a_1=0$ ，取决于 $k$ 是奇数还是偶数，以让与 $k$ 奇偶性不同的那一列系数都为 $0$ ；
2. 在与 $k$ 奇偶性相同的那一列中，使第 $k+2$ 项恰好为 $0$，这样后面的项都会为 $0$，而前面的项都是非 $0$ 的。

也就是说，对第 $k+2$ 项，我们需要

$$
a_{k+2} = \frac{(k+\left\vert m \right\vert )(k + \left\vert m \right\vert  + 1) - c / \hbar^2}{(k+1) (k+2)} a_k = 0 \cdot a_k
$$

这要求

$$
c = \hbar^2 (k + \left\vert m \right\vert ) (k + \left\vert m \right\vert + 1)
$$

不妨令 $l = k + \left\vert m \right\vert$，其取值为 $0, 1, 2, \cdots$，则上式变为

$$
c = \hbar^2 l(l+1)
$$

$l, k, m$ 三个变量中有两个自由变量，如果取 $l, m$ 为自由变量，就有 $l \ge \left\vert m \right\vert $，即 $-l \le m \le l$。

将我们上面得到的结论整理一下，也就是

$$
H(w) = \sum_{j=0}^{l-\left\vert m \right\vert } a_j w^j \\
G(w) = (1-w^2)^{\left\vert m \right\vert / 2} \sum_{j=0}^{l-\left\vert m \right\vert } a_j w^j  \\
s_{l, m}(\theta) = \sin^{\left\vert m \right\vert } \theta  \sum_{j=0}^{l-\left\vert m \right\vert } a_j \cos ^j \theta
$$

其中 $a_j$ 满足

$$
a_{j+2} = \frac{(j+\left\vert m \right\vert )(j + \left\vert m \right\vert  + 1) - l(l+1)}{(j+1) (j+2)} a_j
$$

这样，角度部分的波函数就可以写成

$$
Y_{l, m}(\theta, \phi) = \frac{1}{\sqrt{2\pi}}e^{im\phi} \sin^{\left\vert m \right\vert } \theta  \sum_{j=0}^{l-\left\vert m \right\vert } a_j \cos ^j  \theta
$$

和本征方程

$$
\hat{L}^2 Y_{l, m} (\theta, \phi) = l(l+1) \hbar^2 Y_{l, m} (\theta, \phi)\\
\hat{L}_z Y_{l, m} (\theta, \phi) = m \hbar  Y_{l, m} (\theta, \phi)
$$

注意 $s(\theta)$ 是未归一化的，当我们关心特定 $l, m$ 取值时角度部分波函数的形式，需要单独对 $s(\theta)$ 做归一化。