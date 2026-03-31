---
title: "手撕类氢原子薛定谔方程：径向部分波函数"
description: "径向部分的本征函数，以及完整的类氢原子薛定谔方程的形式"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

回忆我们的类氢原子薛定谔方程

$$
\frac{-\hbar^2}{2m_e} \left( \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial^2 }{\partial r^2} - \frac{1}{r^2 \hbar^2} \hat{L}^2 \right) \psi(r, \theta, \phi) - \frac{Ze^2}{4\pi \epsilon_0 r}  \psi(r, \theta, \phi) = E \psi(r, \theta, \phi)
$$

并且我们对波函数进行了变量分离

$$
\psi(r, \theta, \phi) = R(r) Y_{l, m}(\theta, \phi)
$$

后者我们已经解出来了，而且我们计算了本征方程

$$
\hat{L}^2 Y_{l, m}(\theta, \phi) = l(l+1) \hbar^2 Y_{l, m}(\theta, \phi)
$$

我们将它带入薛定谔方程

$$
\frac{-\hbar^2}{2m_e} \left( \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial ^2}{\partial r^2} \right) R(r)Y_{l, m}(\theta, \phi) + \frac{1}{2m_e r^2} \hat{L}^2 R(r) Y_{l, m}(\theta, \phi) - \frac{Ze^2}{4\pi \epsilon_0 r} R_(r) Y_{l, m}(\theta, \phi) = E R(r)Y_{l, m}(\theta, \phi) \\
\frac{-\hbar^2}{2m_e} \left( \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial ^2}{\partial r^2} \right) R(r)Y_{l, m}(\theta, \phi) + \frac{l(l+1)\hbar^2}{2m_e r^2} R(r) Y_{l, m}(\theta, \phi) - \frac{Ze^2}{4\pi \epsilon_0 r} R_(r) Y_{l, m}(\theta, \phi) = E R(r)Y_{l, m}(\theta, \phi) 
$$

这时我们消去 $Y_{l, m}(\theta, \phi)$，这个方程就变成了径向函数的本征方程

$$
\frac{-\hbar^2}{2m_e} \left( \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial ^2}{\partial r^2} \right) R(r) + \left( \frac{l(l+1)\hbar^2}{2m_e r^2}- \frac{Ze^2}{4\pi \epsilon_0 r} - E \right) R(r) = 0
$$

或

$$
\frac{\partial ^2}{\partial r^2} R(r) + \frac{2}{r} \frac{\partial }{\partial r} R(r) + \left(
    \frac{2m_e E}{\hbar^2} + \frac{Ze^2 m_e}{2\pi \epsilon_0 \hbar^2 r} - \frac{l(l+1)}{r^2}
\right) R(r) = 0
$$

我们知道玻尔半径 $a = (4\pi \epsilon_0 \hbar^2 )/ (m_e e^2)$，所以有

$$
\frac{\partial ^2}{\partial r^2} R(r) + \frac{2}{r} \frac{\partial }{\partial r} R(r) + \left(
    \frac{2m_e E}{\hbar^2} + \frac{2Z}{ar} - \frac{l(l+1)}{r^2}
\right) R(r) = 0
$$

这个方程看起来很solvable，但是如果我们直接尝试用级数解求解，我们会得到一个像这样的三项递推公式：

$$
\left( n(n+1) - l(l+1) \right) a_n + \frac{2Z}{a} a_{n-1} + \frac{2m_e E}{\hbar^2} a_{n-2} = 0
$$

因此，我们需要尝试某些近似方法来得到一个两项的递推公式。

我们考虑当 $r \to \infty$ 的情况，此时 $1/r \to 0$ 且 $1 / r^2 \to 0$，原方程变为

$$
R''(r) + \frac{2m_e E}{\hbar^2} R(r) \approx 0
$$

初中生都知道这个方程怎么解。

$$
R(r) \approx e^{\pm r \sqrt{-2m_e E} / \hbar}
$$

考虑到，束缚态氢原子具有负能量，因此 $\sqrt{-2m_e E} / \hbar$ 取实值。并且，为了尽可能使 $R(r)$ 品优，需要保证这个函数在趋势上是平方可积的，所以，指数上应该取负值。故，我们可以设

$$
R(r) = e^{-Cr} K(r) \\
C = \sqrt{\frac{-2m_e E}{\hbar^2}}
$$

将其带入原微分方程中。

$$
\frac{\partial }{\partial r} R(r) = -C e^{-Cr} K(r) + e^{-Cr} K'(r)
$$

$$
\frac{\partial ^2}{\partial r^2} R(r) = C^2 e^{-Cr} K(r) - 2C e^{-Cr} K'(r) + e^{-Cr} K''(r)
$$

$$
C^2 e^{-Cr} K(r) - 2C e^{-Cr} K'(r) + e^{-Cr} K''(r) \\
+\frac{2}{r} \left( -C e^{-Cr} K(r) + e^{-Cr} K'(r) \right) + \left( -C + \frac{2Z}{ar} - \frac{l(l+1)}{r^2} \right) e^{-Cr} K(r) = 0
$$

两侧同乘 $r^2 \exp (-Cr)$ 得到

$$
C r^2 K(r) - 2C r^2 K'(r) + r^2 K''(r) - 2rCK(r) +2r K'(r) -C r^2K(r) + \frac{2Zr}{a} K(r) - l(l+1)K(r) = 0 
$$

化简

$$
(C r^2 -2Cr -Cr^2 + \frac{2Z}{a}r -l(l+1))K(r) + (- 2Cr^2 + 2r) K'(r) + r^2 K''(r) = 0 
$$

再化简

$$
((2Z / a - 2C) r - l(l+1)) K(r) +(2r - 2Cr^2) K'(r) + r^2 K''(r) = 0
$$

太棒了，让我们试试级数解。

$$
K(r) = \sum_{k=0}c_k r^k
$$

如果读者跟着本文一步一步算下来，对这个计算过程应该已经非常熟悉了。

$$
((2Z / a - 2C)r - l(l+1)) \sum_{k=0}c_k r^k + (2r - 2Cr^2) \sum_{k=0} c_{k+1} (k+1) r^k + r^2 \sum_{k=0} c_{k+2} (k+1) (k+2) r^k = 0 \\
\sum_{k=0} \left(
    (2Z / a - 2C) c_k r^{k+1} - l(l+1) c_k r^k
\right) + \sum_{k=0} 
\left( 
    2c_{k+1}(k+1)r^{k+1} - 2C c_{k+1}(k+1) r^{k+2}
\right) + \sum_{k=0} \left(
    c_{k+2} (k+1)(k+2)r^{k+2}
\right) = 0 \\
$$

单独提出前两项，有

$$
(-l(l+1)c_0+2c_2) r^0 + ((2Z / a - 2C)c_0 - l(l+1)c_1 + 2c_1 + 6c_3) r^1 + \\
\sum_{k=2} \left(
    (2Z / a -2 C) c_{k-1} - l(l+1)c_k +2 c_k k - 2C c_{k-1}(k-1) + c_k k (k-1)
\right) r^k = 0
$$

有

$$
2c_2 = l(l+1)c_0 \\
(2Z / a - 2C)c_0 - (l^2 + l - 2)c_1 + 6c_3 = 0 \\
\left( k(k+1) -l(l+1) \right) c_k + \left( (2 Z / a - 2C)- 2C(k-1) \right) c_{k-1} = 0
$$

解得

$$
c_2 = \frac{l(l+1)}{2}c_0 \\
c_3 = \frac{1}{3}(C - Z / a)c_0 + \frac{1}{6} (l^2 + l - 2)c_1 \\
(k(k+1) - l(l+1)) c_k = (2Ck - 2 Z / a ) c_{k-1}
$$

最后一个等式很有趣，因为这意味着，在 $k < l$ 的所有项中，都有 $a_k = 0$。因此，我们可以提一项 $r^l$ 出来，使得剩下的每一项 $r^k$ 都有非零系数。

$$
K(r) = r^l M(r)
$$

代回原方程，得到

$$
r^2 M''(r) + ((2l+2)r - 2Cr^2) M'(r) + (2Z / a - 2C - 2Cl)rM(r) = 0
$$

消去一个 $r$

$$
r M''(r) + (2l + 2 - 2Cr) M'(r) + (2Z / a - 2C - 2Cl)M(r) = 0
$$

现在我们可以笃定地写出级数解

$$
M(r) = \sum_{j=0} b_j r^j \\
M'(r) = \sum_{j=0} b_{j+1} (j+1) r^j \\
M''(r) = \sum_{j=0} b_{j+1} j (j+1) r^{j-1}
$$

代入

$$
\sum_{j=0} b_{j+1} j (j+1) r^j + \sum_{j=0} (2l+2) b_{j+1} (j+1) r^j - \sum_{j=0} 2C b_{j+1} (j+1) r^{j+1} + \sum_{j=0} (2Z / a - 2C - 2 Cl) b_j r^j = 0 
$$

合并

$$
(2l+2) b_1 + (2Z / a - 2C - 2Cl) b_0 + \\
\sum_{j=1} \left(b_{j+1} j(j+1) + (2l+2) b_{j+1} (j+1) - 2C b_j j + (2 Z / a - 2C -2Cl) b_j \right) r^j= 0
$$

解得

$$
b_1 = \frac{2C + 2Cl - 2Z / a}{2l+2} b_0 \\~\\
b_{j+1} = \frac{2C + 2Cl + 2Cj - 2 Z / a}{j(j+1) + 2(l+1)(j+1)} b_j
$$

现在，是时候来考虑 $R(r)$ 在该解下是否品优了。考虑 $j \to \infty$，近似有

$$
b_{j+1} \sim \frac{2C}{j} b_j
$$

注意力旺盛的读者可以注意到，这个形式事实上符合 $e^{2Cr}$ 的麦克劳林级数系数的关系

$$
e^{2Cr} = \sum_{j=0} \frac{1}{j!} (2C)^j x^j
$$

因此，我们有理由认为，当 $j \to \infty$，有 $M(r) \sim e^{2Cr}$。同时，因为 $R(r) = e^{-Cr} r^l M(r)$，因此当 $j \to \infty$，$R(r) \sim r^l e^{Cr}$，显然这不是一个品优的波函数。这个问题我们遇到过，当我们在求解角度部分波函数的时候，我们通过使某 $k$ 项后的所有项都等于 $0$ 解决了收敛性的问题，在这里我们可以同样处理，因为 $C$ 是一个与 $E$ 有关的值。

考虑第 $k$ 项之后所有 $b_j = 0$ ，则当 $j=k$，有

$$
b_{k+1} = \frac{2C + 2Cl + 2Ck - 2 Z / a}{k(k+1) + 2(l+1)(k+1)} b_k = 0
$$

这给出

$$
C = \frac{Z}{a(1 + l + k)}
$$

也就是

$$
\sqrt{\frac{-2m_e E}{\hbar^2}} = \frac{Zm_e e^2}{ 4\pi \epsilon_0 \hbar^2 (1 + l + k)} \\~\\
E = - \frac{Z^2 m_e e^4}{4 \hbar^2 \pi^2 \epsilon_0^2 } \frac{1}{(1 + l + k)^2}
$$

不妨令

$$
n = 1 + l + k, n \in \mathbb{N}^+
$$

有

$$
E = - \frac{Z^2 m_e e^4}{4 \hbar^2 \pi^2 \epsilon_0^2 } \frac{1}{n^2}
$$

这与波尔给出的氢原子光谱的结果是一致的。

据此，可以通过递推的方式给出径向波函数的表达式。表达式中的系数与 $b_0$ 的取值有关。

$$
R_{n, l}(r) = e^{-\frac{Zr}{an}} r^l \sum_{j=0}^{n-l-1} b_j r^j 
$$

在确定 $n$ 和 $l$ 的取值后，即可根据归一化原则确定 $b_0$ 的取值。

$$
\int_0^\infty \left \vert R_{n, l}^2(r) \right \vert r^2 dr = 1
$$

至此，我们已经解出了波函数的所有部分，让我们把它们写在一起：

$$
\psi_{n, l, m}(r, \theta, \phi) = R_{n, l}(r) Y_{l, m}(\theta, \phi) = \frac{1}{\sqrt{2\pi}} r^l e^{-\frac{Zr}{an}} e^{im\phi} \sin^{\left\vert m \right\vert } \theta \sum_{j=0}^{l-\left\vert m \right\vert } a_j \cos ^j \theta \sum_{j=0}^{n-l-1} b_j r^j 
$$

这是尚未归一化的波函数，确定具体的 $n, l, m$ 后可以根据积分进行归一化。