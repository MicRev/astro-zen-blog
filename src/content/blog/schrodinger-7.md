---
title: "手撕类氢原子薛定谔方程：角动量算符的本征函数（1）"
description: "角动量算符的变量分离和第一部分的本征函数"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

回顾角度部分的本征方程

$$
\hat{L}^2 Y(\theta, \phi) = c Y(\theta, \phi)
$$

由于 $\hat{L}^2$ 涉及到 $\theta, \phi$ 两个变量，解这个方程看起来还是比较困难。但是注意力集中的读者可以注意到

$$
[\hat{L}^2, \hat{L}_z] = [\hat{L}^2, -i \hbar \frac{\partial }{\partial \phi}] =  0
$$

于是，出于和上一节相同的理由，我们可以把 $Y(\theta, \phi)$ 写成 $Y(\theta, \phi) = s(\theta) f(\phi)$，这样我们就有

$$
\hat{L}_z s(\theta) f(\phi) = b \cdot s(\theta) f(\phi) \\
\hat{L}^2 s(\theta) f(\phi) = c \cdot s(\theta) f (\phi)
$$

先解上面那个，$s(\theta)$ 显然可以消掉，所以

$$
-i \hbar \frac{\partial }{\partial \phi} f(\phi) = b f(\phi)
$$

即使是初中生也能轻易地解出

$$
f(\phi) = A \exp \left(- {\frac{ib}{\hbar}\phi} \right)
$$

但是初中生没学过量子力学，因此为初中生所不知的是，我们要求 $\psi$ 是一个品优的波函数，这就要求了 $f(\phi)$ 的单值性。$\phi$ 这个变量作为 $xy$ 平面上的辐角，本身是以 $2\pi$ 为周期的，因此为了保证函数的单值性，我们希冀

$$
f(\phi+2\pi) = A \exp \left( -\frac{ib}{\hbar}2\pi \right) \exp \left(-\frac{ib}{\hbar}\phi \right) = f(\phi)
$$

这就要求

$$
\exp \left( -\frac{ib}{\hbar}2\pi \right) = 1
$$

解得

$$
b = m \hbar, m \in \mathbb{Z}
$$

$\phi$ 部分的解就变成了

$$
f(\phi) = A \exp (im\phi)
$$

同时，品优的波函数是归一的。对 $\psi$ 来说，有三重积分

$$
\int_0^{2\pi} \int_0^{\pi} \int_0^\infty \left\vert \psi^2 \right\vert r^2 \sin \theta dr d\theta d\phi = 1
$$

由于 $\phi$ 是变量分离的，积分时也可以把三个变量分离

$$
\int_0^\infty \left\vert R(r) \right\vert ^2 r^2 dr \int_0^{\pi} \left\vert s(\theta) \right\vert ^2 \sin \theta d\theta \int_0^{2\pi} \left\vert f(\phi) \right\vert ^2 d\phi = 1
$$

一件看起来相当合理的事情是三个函数分别应该是归一化的。

$$
\int_0^\infty \left\vert R(r) \right\vert ^2 r^2 dr = 1 \\
\int_0^{\pi} \left\vert s(\theta) \right\vert ^2 \sin \theta d\theta = 1 \\
\int_0^{2\pi} \left\vert f(\phi) \right\vert ^2 d\phi = 1
$$

> 如果你对此想argue些什么，shut up and calculate。

> 如果你对上面这句话感到疑惑，仔细检查一下我们的逻辑，产生疑惑后再回到上面这句话。

关注第三个方程，我们可以归一化 $f$ 。

$$
\int_0^{2\pi} \left\vert f(\phi) \right\vert ^2 d\phi = \int_0^{2\pi} \left\vert A \right\vert ^2 d\phi = 2\pi \left\vert A \right\vert ^2 = 1
$$

解出

$$
\left\vert A \right\vert  = \frac{1}{\sqrt{2\pi}}
$$

于是有

$$
f_m(\phi) = \frac{1}{\sqrt{2\pi}} \exp (im\phi)
$$

这是除势箱模型和谐振子模型外，另一个“边界条件带来量子化”的例子。接着我们来解第二个方程

$$
\begin{aligned}
\hat{L}^2 s(\theta) f_m(\phi) = & -\hbar^2 \left( \frac{\partial ^2}{\partial \theta^2} + \cot \theta \frac{\partial }{\partial \theta} + \frac{1}{\sin ^2 \theta} \frac{\partial ^2}{\partial \phi^2} \right) s(\theta) f(\phi) \\
= & -\hbar^2 \left( 
    f(\phi) \frac{\partial ^2}{\partial \theta} s(\theta) + 
    f(\phi) \cot \theta \frac{\partial }{\partial \theta} s(\theta) + 
    \frac{s(\theta)}{\sin ^2 \theta}\frac{\partial ^2}{\partial \phi^2} f(\phi)
\right) \\
= & -\hbar^2 \left( 
    f(\phi) \frac{\partial ^2}{\partial \theta} s(\theta) + 
    f(\phi) \cot \theta \frac{\partial }{\partial \theta} s(\theta) - 
    \frac{s(\theta)}{\sin ^2 \theta} m^2 f(\phi)
\right) \\
= & c \cdot s(\theta) f(\phi)
\end{aligned}
$$

两边消去 $f_m(\phi)$，这个方程就变成了只关于 $s(\theta)$ 的微分方程

$$
\frac{\partial ^2}{\partial \theta^2} s(\theta) + \cot \theta \frac{\partial }{\partial \theta} s(\theta) - \frac{m^2}{\sin ^2 \theta} s(\theta) + \frac{c}{\hbar^2} s(\theta) = 0
$$

这一堆三角函数看着令人心烦，如果能把他变成多项式会好看很多。考虑到 $\theta \in [0, \pi]$，$w : \theta \rightarrow \cos \theta$ 恰好在这个区间内构成一个一一映射，这样我们就能用 $w$ 表示所有烦人的三角函数。考虑

$$
s(\theta) = G(w), w \in [-1, 1]
$$

和它的导数

$$
\frac{\partial }{\partial \theta} s(\theta) = \frac{\partial G}{\partial w} \frac{\partial w}{\partial \theta} = -\sin \theta \frac{\partial G}{\partial \theta} = - \left( 1-w^2 \right)^{1 / 2} \frac{\partial G}{\partial w}
$$

以及二阶导数

$$
\begin{aligned}
\frac{\partial ^2}{\partial \theta^2} s(\theta) = & \frac{\partial }{\partial \theta} \left( \frac{\partial G}{\partial \theta} \right) \\
= & \frac{\partial }{\partial w} \left(
    - \left( 1-w^2 \right)^{1 / 2} \frac{\partial G}{\partial w}
\right) \frac{\partial w}{\partial \theta} \\
= & - \left(
\frac{-w}{\left(1-w^2\right)^{1 / 2}} \frac{\partial G}{\partial w} + \left(1-w^2\right)^{1 / 2} \frac{\partial ^2 G}{\partial w^2}
\right) \cdot \left(- \left( 1 - w^2 \right)^{1 / 2} \right) \\
= & - w \frac{\partial G}{\partial w} + \left( 1 - w^2 \right) \frac{\partial ^2 G}{\partial w^2}
\end{aligned}
$$

代回原方程，得到了一个多项式微分方程。

$$
\left( 1 - w^2 \right) \frac{\partial ^2 G}{\partial w^2} - w \frac{\partial G}{\partial w} + \frac{w}{(1 - w^2)^{1 / 2}} \left( - \left( 1-w^2 \right)^{1 / 2} \frac{\partial G}{\partial w} \right) + \left(\frac{c}{\hbar^2} - \frac{m^2}{1 - w^2} \right)G = 0 \\ ~ \\
\left( 1 - w^2 \right) \frac{\partial ^2 G}{\partial w^2} - 2w \frac{\partial G}{\partial w} + \left(\frac{c}{\hbar^2} - \frac{m^2}{1 - w^2} \right)G = 0
$$

这个方程的求解将在下一节进行。