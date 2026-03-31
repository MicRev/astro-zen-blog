---
title: "手撕类氢原子薛定谔方程：Born-Oppenheimer 近似"
description: "由BO近似给出电子的薛定谔方程"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

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
-\frac{\hbar^2}{2M} \nabla^2_M \Psi -\frac{\hbar^2}{2\mu} \nabla^2_\mu \Psi -\hat{V} \Psi = E \Psi \tag{1.2}
$$

我们迫切地希望能把 $\Psi(x_M, y_M, z_M, x_\mu, y_\mu, z_\mu)$ 写成原子核波函数和电子波函数的乘积，这样就可以只考虑电子的相对运动了。Born和Oppenheimer考虑了如下物理事实：电子的移动速度远大于原子核的移动速度，且电子的质量远小于原子核的质量。

这导致：

1.  可以将总波函数写成核波函数和电子相对运动波函数的乘积，即

    $$
    \Psi = \psi_e \chi_n
    $$

2.  折合质量 $\mu \approx m_e$，因为
    
    $$
    \mu = \frac{1}{\frac{1}{m_e} + \frac{1}{m_n}} \approx \frac{1}{\frac{1}{m_e} + 0} = m_e
    $$

这样，我们可以分别写出原子核和电子的薛定谔方程

$$
-\frac{\hbar^2}{2M} \nabla^2_M \chi_n + \hat{V} \chi_n = E_n \chi_n \tag{1.3}
$$

和

$$
-\frac{\hbar^2}{2m_e} \nabla^2_e \psi_e + \hat{V} \psi_e = E_e \psi_e \tag{1.4}
$$

不难发现 $(1.3) \cdot \psi_e + (1.4) \cdot \chi_n = (1.2)$，因此 $E = E_n + E_e$ 。

当我们只关心 $(1.4)$ 时，这个方程就变成了电子的薛定谔方程。

$$
\hat{H}_e \psi = E \psi
$$

再次展开看看。

$$
-\frac{\hbar^2}{2m_e} \left( \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2} \right) \psi - \frac{Ze^2}{4\pi \epsilon_0} (x^2 + y^2 + z^2)^{-\frac{1}{2}} \psi = E\psi \tag{1.5}
$$

这个方程相比于我们原来的 $(1.1)$ 已经好看很多了（相当多，至少少了一行），但是一眼看上去还是不知道怎么解。