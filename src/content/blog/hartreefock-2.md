---
title: "从零开始的Hartree Fock：费米子和Slater行列式"
description: "电子的费米子特性，以及Slater行列式为什么是合理的多电子波函数"
date: 2024-04-20
tags: ["量子化学", "从零开始的Hartree Fock生活"]
---

# 2. 费米子和Slater行列式

电子是**全同费米子**，也就是说描述一个多电子体系的波函数应该是**交换反对称**的：任意交换两个电子的位置，体系的波函数应该取相反数，也就是

$$
\hat{P}_{ij} \Psi = \Psi(\cdots, r_j, r_i, \cdots) = -\Psi
$$

其中 $\hat{P}_{ij}$ 是交换算符，效果是交换电子i和电子j。

但是如果直接把所有单电子的波函数乘起来构成体系的总波函数，这个波函数显然不是交换反对称的。因此，Slater给出，可以用一个**行列式**来表示反对称的多电子波函数，称为Slater行列式。

$$
\Psi(r_1, \cdots, r_N) = \frac{1}{\sqrt{N!}} \left|
\begin{matrix}
\psi_1(r_1) & \psi_1(r_2) & \cdots & \psi_1(r_n) \\
\psi_2(r_1) & \psi_2(r_2) & \cdots & \psi_2(r_n) \\
\vdots      & \vdots      & \ddots & \vdots \\
\psi_N(r_1) & \psi_N(r_2) & \cdots & \psi_n(r_N) \\
\end{matrix}
\right|
$$

其中每个波函数 $\psi_i$ 是**轨道波函数**。我们熟知在线性代数中，上式可以被这样展开：

$$
\Psi = \frac{1}{\sqrt{N!}} \sum_n^{N!} (-1)^{p_n} \hat{P}_n \{ \psi_1 \psi_2 \cdots \psi_N \}
$$

其中-1的指数 $p_n$ 是逆序数。或用定义反对称算符 $\hat{A}$，将总波函数表示为

$$
\Psi = \hat{A} \psi_1 \psi_2 \cdots \psi_n
$$

或用Dirac Bra简记为

$$
\Psi = \left| \psi_1 \psi_2 \cdots \psi_N \right>
$$

我们知道，交换行列式的两列会让行列式的值变为相反数，这与费米子的性质不谋而合。另外，如果行列式两列相同——这意味着有两个电子的波函数完全一致，也就是他们处于同一状态——行列式的值会变成0，这也与Pauli不相容原理一致。

因此，对某个给定的单电子近似的体系，Slater行列式是描述该体系状态的良好波函数。

