---
title: "手撕类氢原子薛定谔方程：建立方程"
description: "写出类氢原子体系的薛定谔方程"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

> 本文旨在为有志于手解类氢原子薛定谔方程的非物理专业同学（化学、材料等——他们的结构化学教科书上通常对计算细节一笔带过，使得计算实践变得无以复加的困难，但在有参考的情况下，这种难度的计算事实上对一个理工科学生来说并非无可企及）提供尽可能完整的计算细节参考。因此，希望读者至少了解量子力学中的三维势箱、角动量算符，和必要的微积分、线性代数基础。
> 本文适合希望或正在详细计算氢原子薛定谔方程的读者，对于追求精简介绍的读者可能显得繁琐。我自认为计算能力极差，因此我会把我自己在草稿纸上写的（几乎）每一步同步在文章里，以期最大程度上照顾那些计算能力和我一样差的读者排查计算过程中的错误。
    
我们熟知定态薛定谔方程：

$$
\hat{H} \psi = E \psi
$$

其中

$$
\hat{H} = \hat{T} + \hat{V} = - \frac{\hbar^2}{2m} \nabla^2 + \hat{V}
$$

对类氢原子体系而言，这个体系涉及两个粒子：中心原子核和核外电子。因此总体动能涉及两项。

$$
\hat{T} = - \frac{\hbar^2}{2m_n} \nabla^2_n -\frac{\hbar^2}{2m_e} \nabla^2_e
$$

其中下标$n$为原子核（nuclear）相关的项，下标$e$为电子（electron）相关的项。而势能项可以用经典的电势能。

$$
\hat{V} = - \frac{1}{4\pi \epsilon_0} \frac{Ze^2}{r_{ne}}
$$

> 这件事其实并不显然。凭什么动能、哈密顿等量都要在量子力学中变成奇奇怪怪的形式，而电势能就可以直接套用经典的形式？推荐站内一个[问题](https://www.zhihu.com/question/597158272?utm_psn=1700904575887007744)。

薛定谔方程（如果把所有项都拆开）就是

$$
\begin{aligned}
-\frac{\hbar^2}{2m_n} \left(\frac{\partial^2}{\partial x_n^2} + \frac{\partial^2}{\partial y_n^2} + \frac{\partial^2}{\partial z_n^2} \right) \Psi -\frac{\hbar^2}{2m_e} \left(\frac{\partial^2}{\partial x_e^2} + \frac{\partial^2}{\partial y_e^2} + \frac{\partial^2}{\partial z_e^2}\right)& \Psi\\
-\frac{Ze^2}{4\pi \epsilon_0} \left((x_n - x_e)^2 + (y_n - y_e)^2 + (z_n - z_e)^2\right)^{-\frac{1}{2}} & \Psi = E \Psi 
\end{aligned} 
$$

其中

$$
\Psi = \Psi(x_n, y_n, z_n, x_e, y_e, z_e)
$$

这玩意怎么看都很难解，鉴于我们现在解过最复杂的体系就是三维势箱中的粒子，这玩意看起来根本没法解。

相比原子核的运动，其实我们更关心电子的运动，因此我们希望把原子核和电子的运动区分开来。让我们先考虑经典体系中的情况：

$$
T = \frac{1}{2} m_n \dot{r_n}^2 + \frac{1}{2} m_e \dot{r_e}^2
$$

一个好方法是采用中心坐标系：

$$
T = \frac{1}{2} M \dot{R}^2 + \frac{1}{2} \mu \dot{r}^2
$$

其中

$$
M = m_n + m_e, \mu = \frac{m_n m_e}{m_n + m_e} \\~\\
\vec{R} = \frac{m_n \vec{r_n} + m_e \vec{r_e}}{m_n + m_e}, \vec{r} = \vec{r_e} - \vec{r_n}
$$

方便证明这俩坐标系是等价的。这样我们就把两个粒子的运动分解为“总体的运动”（$\vec{R}$）和相对运动（$\vec{r}$）。相似地我们可以写出动能算符

$$
\hat{T} = - \frac{\hbar^2}{2M} \nabla^2_M -\frac{\hbar^2}{2\mu} \nabla^2_\mu
$$

这样我们再看一看薛定谔方程变成什么样了。

$$
-\frac{\hbar^2}{2M} \nabla^2_M \Psi -\frac{\hbar^2}{2\mu} \nabla^2_\mu \Psi -\hat{V} \Psi = E \Psi 
$$

我们迫切地希望能把$\Psi(x_M, y_M, z_M, x_\mu, y_\mu, z_\mu)$写成原子核波函数和电子波函数的乘积，这样就可以只考虑电子的相对运动了。Born和Oppenheimer考虑了如下物理事实：电子的移动速度远大于原子核的移动速度，且电子的质量远小于原子核的质量。

这导致：

1.  可以将总波函数写成核波函数和电子相对运动波函数的乘积，即

    $$
    \Psi = \psi_e \chi_n
    $$

2.  折合质量$\mu \approx m_e$，因为
    
    $$
    \mu = \frac{1}{\frac{1}{m_e} + \frac{1}{m_n}} \approx \frac{1}{\frac{1}{m_e} + 0} = m_e
    $$

这样，我们可以分别写出原子核和电子的薛定谔方程

$$
-\frac{\hbar^2}{2M} \nabla^2_M \chi_n + \hat{V} \chi_n = E_n \chi_n 
$$

和

$$
-\frac{\hbar^2}{2m_e} \nabla^2_e \psi_e + \hat{V} \psi_e = E_e \psi_e 
$$

不难发现$E = E_n + E_e$。

当我们只关心上式时，这个方程就变成了电子的薛定谔方程。

$$
\hat{H}_e \psi = E \psi
$$

再次展开看看。

$$
-\frac{\hbar^2}{2m_e} \left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} \right) \psi - \frac{Ze^2}{4\pi \epsilon_0} (x^2 + y^2 + z^2)^{-\frac{1}{2}} \psi = E\psi
$$

这个方程相比于我们原来的版本已经好看很多了（相当多，至少少了一行），但是一眼看上去还是不知道怎么解。考虑到这是一个球形的体系，也许我们把这个方程放在球坐标系里而非笛卡尔坐标系里会好算很多。