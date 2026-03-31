---
title: "从零开始的Hartree Fock：Condon-Slater规则"
description: "Slater行列式波函数矩阵元的推导"
date: 2024-04-20
tags: ["量子化学", "从零开始的Hartree Fock生活"]
---

在总波函数被用Slater行列式表达之后，我们希望知道系统的总能量 $\left<\Psi\right| \hat{H} \left|\Psi\right>$ 要用怎样的形式表达。

$$
\hat{H} = \sum_i - \frac{1}{2m_e} \nabla_i^2 + \sum_A \sum_i - \frac{Z_A}{r_{iA}} + \frac{1}{2} \sum_i \sum_j \frac{1}{r_{ij}}
$$

如Hartree所说，哈密顿算符可以被分为单电子部分和双电子部分，单电子部分是动能和电子-核势能项，只涉及到一个电子；双电子部分是电子-电子势能项，涉及到两个电子。也就是说，我们可以把哈密顿算符记为

$$
\hat{H} = \sum_i \hat{h}(i) + \frac{1}{2} \sum_{i} \sum_{j} \hat{g}(i, j)
$$

应该注意到，

$$
\int \psi_1^*(r_1) \cdots \psi_N^*(r_N) \hat{h}(i) \psi_1(r_1) \cdots \psi_N(r_N) dr^N \\
= \int \psi_1^*(r_1) \psi_1(r_1)dr_1 \cdots \int \psi_N^*(r_N) \psi_N(r_N)dr_N \int \psi_i^*(r_i) \hat{h}(i) \psi_i(r_i)dr_i
$$

同理

$$
\int \psi_1^*(r_1) \cdots \psi_N^*(r_N) \hat{g}(i,j) \psi_1(r_1) \cdots \psi_N(r_N) dr^N \\
= \int \psi_1^*(r_1) \psi_1(r_1)dr_1 \cdots \int \psi_N^*(r_N) \psi_N(r_N)dr_N \int \psi_i^*(r_i)\psi_j^*(r_j) \hat{g}(i, j) \psi_i(r_i) \psi_j(r_j) dr_i dr_j
$$

于是我们希望看看展开 $\left<\Psi\right| \hat{H} \left|\Psi\right>$ 会发生什么事。

$$
\begin{aligned}
\left<\Psi\right| \hat{H} \left|\Psi\right> & = \frac{1}{N!} \int \hat{A} \psi_1^* \cdots \psi_N^* 
\left( \sum_i \hat{h}(i) + \frac{1}{2} \sum_{i} \sum_{j} \hat{g}(i, j) \right) 
\hat{A} \psi_1 \cdots \psi_N dr^N \\
& = \frac{1}{N!} \int \hat{A} \psi_1^* \cdots \psi_N^* \sum_i \hat{h}(i) \hat{A} \psi_1 \cdots \psi_N dr^N + 
\frac{1}{N!} \int \hat{A} \psi_1^* \cdots \psi_N^* \frac{1}{2} \sum_{i} \sum_{j} \hat{g}(i, j) \hat{A} \psi_1 \cdots \psi_N dr^N
\end{aligned}
$$

====

Condon-Slater规则是**化简的艺术**，这建立在构成总波函数的轨道波函数的正交归一性的基础上，即 $\left<\psi_i | \psi_j\right> = \delta_{ij}$ 。先考虑第一项

$$
\begin{aligned}
& \int \hat{A} \psi_1^* \cdots \psi_N^* \sum_i \hat{h}(i) \hat{A} \psi_1 \cdots \psi_N dr^N  \\
= & \sum_i^N \sum_{p_1}^{N!} \sum_{p_2}^{N!} (-1)^{p_1+p_2} \int \left( \hat{P}_1 \psi_1^* \cdots \psi_N^* \right) \hat{h}(i) \left( \hat{P}_2 \psi_1 \cdots \psi_N \right) dr^N
\end{aligned}
$$

这其中有 $N \times N! \times N!$ 项，这里有很多项具有非0值，如

$$
\begin{aligned}
& \int \psi_1^*(r_1) \psi_2^*(r_2) \cdots \psi_N^*(r_N) \hat{h}(1) \psi_1(r_1) \psi_2(r_2) \cdots \psi_N(r_N) d r^N \\
= & \left<\psi_1\right| \hat{h} \left|\psi_1\right> \left<\psi_2 | \psi_2\right> \cdots \left<\psi_N | \psi_N\right> = \left<\psi_1\right| \hat{h} \left|\psi_1\right> \times 1 \times 1 \times \cdots \times 1 = \left<\psi_1\right| \hat{h} \left|\psi_1\right> 
\end{aligned}
$$

但同时有很多项是0。例如，

$$
\begin{aligned}
& \int \psi_1^*(r_1) \psi_2^*(r_2) \cdots \psi_N^*(r_N) \hat{h}(1) \psi_2(r_1) \psi_1(r_2) \cdots \psi_N(r_N) d r^N \\
= & \left<\psi_1\right| \hat{h} \left|\psi_2\right> \left<\psi_2 | \psi_1\right> \cdots \left<\psi_N | \psi_N\right> = \left<\psi_1\right| \hat{h} \left|\psi_2\right> \times 0 \times 1 \times \cdots \times 1 = 0
\end{aligned}
$$

注意力集中的同学可以从这两则计算案例中找到规律：**没有被算符作用的电子必须处在相同的轨道上**，才能保证这些电子的轨道不正交从而积分具有非0值。

怎样才能保证这一点呢？由于组成哈密顿左右两边波函数的单电子波函数 $\psi$ 是相同的，因此如果其他电子都处在相同的轨道上，就意味着**被算符作用的电子也在相同的轨道上**。这也就是说，只有当 $\hat{P}_1 = \hat{P}_2$ 时，这个积分才不为0。

$$
\begin{aligned}
& \int \hat{A} \psi_1^* \cdots \psi_N^* \sum_i \hat{h}(i) \hat{A} \psi_1 \cdots \psi_N dr^N  \\
= & \sum_i^N \sum_{p_1}^{N!} (-1)^{p_1 + p_1} \int \left( \hat{P}_1 \psi_1^* \cdots \psi_N^* \right) \hat{h}(i) \left( \hat{P}_1 \psi_1 \cdots \psi_N \right) dr^N \\
= & \sum_i^N \sum_{p_1}^{N!} \int \left( \hat{P}_1 \psi_1^* \cdots \psi_N^* \right) \hat{h}(i) \left( \hat{P}_1 \psi_1 \cdots \psi_N \right) dr^N \\ 
= & N! \sum_i^N \left<\psi_i\right| \hat{h} \left|\psi_i\right>
\end{aligned}
$$

在双电子积分中，**没有被算符作用的电子必须处在相同的轨道上**同样成立。但应该注意到的是，同时有四组双电子积分满足这一条件：

$$
\int \cdots \psi_i^*(r_i) \psi_j^*(r_j) \cdots \hat{g}(i,j) \cdots  \psi_i(r_i) \psi_j(r_j) \cdots dr^N \\
\int \cdots \psi_j^*(r_i) \psi_i^*(r_j) \cdots \hat{g}(i,j) \cdots  \psi_i(r_i) \psi_j(r_j) \cdots dr^N \\
\int \cdots \psi_i^*(r_i) \psi_j^*(r_j) \cdots \hat{g}(i,j) \cdots  \psi_j(r_i) \psi_i(r_j) \cdots dr^N \\
\int \cdots \psi_j^*(r_i) \psi_i^*(r_j) \cdots \hat{g}(i,j) \cdots  \psi_j(r_i) \psi_i(r_j) \cdots dr^N \\
$$

也就是说，在确定左矢中的某一个排列顺序时，右矢中同时有两个排列能与其形成非0的双电子积分。因此，双电子积分变为

$$
\begin{aligned}
& \int \hat{A} \psi_1^* \cdots \psi_N^* \frac{1}{2} \sum_{i} \sum_{j} \hat{g}(i, j) \hat{A} \psi_1 \cdots \psi_N dr^N \\
= & \frac{1}{2} \sum_i^N \sum_j^N \sum_{p_1}^{N!} \int \hat{P}_1  \psi_1^* \cdots \psi_N^* \hat{g}(i, j) \left( (-1)^{p_1 + p_{1a}} \hat{P}_{1a} \psi_1 \cdots \psi_N + (-1)^{p_1+p_{1b}} \hat{P}_{1b} \psi_1 \cdots \psi_N \right) dr^N
\end{aligned}
$$

对右矢中的两种排列，其中一种与左矢中完全一致，另一种在左矢的基础上交换了 $i,j$ 电子，因此可以写出：

$$
\hat{P}_{1a} = \hat{P}_1, \hat{P}_{1b} = \hat{P}_{ij} \hat{P}_1
$$

同时需要求出两者的逆序数，由于 $p_{ij} = 1$，故 $p_{1b} = p_1 \pm 1$ ，从而 $(-1)^{p_1+p_{1b}} = -1$ ，据此可以化简上式：

$$
\begin{aligned}
& \int \hat{A} \psi_1^* \cdots \psi_N^* \frac{1}{2} \sum_{i} \sum_{j} \hat{g}(i, j) \hat{A} \psi_1 \cdots \psi_N dr^N \\
= & \frac{1}{2} \sum_i^N \sum_j^N \sum_{p_1}^{N!} \int \hat{P}_1  \psi_1^* \cdots \psi_N^* \hat{g}(i, j) \left( (-1)^{p_1 + p_{1a}} \hat{P}_{1a} \psi_1 \cdots \psi_N + (-1)^{p_1+p_{1b}} \hat{P}_{1b} \psi_1 \cdots \psi_N \right) dr^N \\
= & \frac{1}{2} \sum_i^N \sum_j^N \sum_{p_1}^{N!} \left( \int \hat{P}_1  \psi_1^* \cdots \psi_N^* \hat{g}(i, j) \hat{P}_1 \psi_1 \cdots \psi_N dr^N - \int \hat{P}_1  \psi_1^* \cdots \psi_N^* \hat{g}(i, j) \hat{P}_{ij} \hat{P}_1 \psi_1 \cdots \psi_N dr^N \right) \\ 
= & N! \frac{1}{2} \sum_i^N \sum_j^N \left( 
    \left<\psi_i(r_i) \psi_j(r_j)\right| \hat{g} \left|\psi_i(r_i) \psi_j(r_j)\right> - 
    \left<\psi_i(r_i) \psi_j(r_j)\right| \hat{g} \left|\psi_j(r_i) \psi_i(r_j)\right>
\right)
\end{aligned}
$$

求和号中的第一项实际上与Hartree当年的结论是一致的。在Hartree的方法中，如果求某电子i对另一电子j的库伦作用，使用的积分实际上就是

$$
\left<\psi_j\right| \hat{J}_{ij} \left|\psi_j\right> = \int \psi_j^*(r_j) \int \psi_i^*(r_i) \frac{1}{r_{ij}} \psi_i(r_i) dr_i \psi_j(r_j) dr_j = \left<\psi_i(r_i) \psi_j(r_j)\right| \hat{g} \left|\psi_i(r_i) \psi_j(r_j)\right>
$$

因此，不妨把这一部分叫做**库伦积分** $J_{ij}$。而第二部分实际上是由于电子作为费米子的**交换反对称**性质产生的，所以把它叫做**交换积分** $K_{ij}$。

将单电子积分和双电子积分代回原式得到

$$
\begin{aligned}
\left<\Psi\right| \hat{H} \left|\Psi\right> & = \frac{1}{N!} \int \hat{A} \psi_1^* \cdots \psi_N^* \sum_i \hat{h}(i) \hat{A} \psi_1 \cdots \psi_N dr^N + 
\frac{1}{N!} \int \hat{A} \psi_1^* \cdots \psi_N^* \frac{1}{2} \sum_{i} \sum_{j} \hat{g}(i, j) \hat{A} \psi_1 \cdots \psi_N dr^N \\
& = \sum_i^N \left<\psi_i\right| \hat{h} \left|\psi_i\right> + \frac{1}{2} \sum_i^N \sum_j^N \left( 
    \left<\psi_i \psi_j\right| \hat{g} \left|\psi_i \psi_j\right> - 
    \left<\psi_i \psi_j\right| \hat{g} \left|\psi_j \psi_i\right>
\right) \\
& = \sum_i^N h_i + \frac{1}{2} \sum_i^N \sum_j^N \left( J_{ij} - K_{ij} \right)
\end{aligned}
$$

这就是Condon Slater规则告诉我们的结论之一。另外，本文中只提到了左矢右矢是两个完全一样的波函数的情况，读者可以自行思考，如果左矢和右矢不一样会怎么样？比如，如果构成左矢和右矢的单电子波函数有一个或两个不同，按照Condon和Slater的思路，我们又会得到怎样的能量表达式？

Condon Slater规则最重要的意义就是帮我们化简了能量的表达式。在此基础上，我们又应该怎么得到描述单电子波函数的方程呢？Fock和Slater受Eular启发，找到了一种推导的方法。