---
title: "从零开始的Hartree Fock：Roothaan方程和迭代解法"
description: "引入基组近似后给出Hartree-Fock-Roothaan方程，以及数值解法"
date: 2024-04-20
tags: ["量子化学", "从零开始的Hartree Fock生活"]
---

回忆Hartree Fock方程

$$
\hat{F} \psi_i = \epsilon_i \psi_i
$$

根据方法（RHF，ROHF，UHF）的选择不同，Fock算符的表达式也不尽相同。从计算方便的角度出发，Roothaan提出可以用一组**基组**的线性组合来表示轨道波函数，即

$$
\psi_i = \sum_{s}^M C_{si} \chi_s
$$

M为基组的数目。带入Hartree Fock方程得到

$$
\hat{F} \sum_s^M  C_{si} \chi_s = \epsilon_i \sum_j^M  C_{si} \chi_i 
$$

将上式两侧作为右矢，左乘左矢 $\left<\chi_r\right|$ 得到

$$
\sum_{s}^M \left<\chi_r\right| \hat{F} \left|\chi_s\right> C_{si} = \epsilon_i \sum_{s}^M \left<\chi_r | \chi_s\right> C_{si}
$$

不妨记 $F_{ij} =\left<\chi_i\right| \hat{F} \left|\chi_j\right>$ ，$S_{ij} = \left<\chi_i | \chi_j\right> $，则上式变为

$$
\sum_s^M F_{rs} C_{si} = \epsilon_i \sum_s^M S_{rs} C_{si}
$$

或写成矩阵形式

$$
\mathbf{F} \mathbf{C} = \mathbf{S} \mathbf{C} \mathbf{\epsilon}
$$

其中 $\mathbf{\epsilon} = \operatorname{diag} \{ \epsilon_{i} \}$ 。这就是Roothaan给出的Hatree Fock Roothaan方程。

如果 $\mathbf{S}$ 是一个单位阵，解这个方程的时候就可以少做一次矩阵乘法，但事实上我们选取的基组并不一定是正交的。为了解决这个问题，可以考虑想办法把 $\mathbf{S}$ 消掉。考虑 $\mathbf{S}$ 是一个Hermitian矩阵，因此存在酉分解

$$
\mathbf{S} = \mathbf{U}^\dagger \sigma \mathbf{U}
$$

其中 $\sigma$ 是对角矩阵，$\mathbf{U}$ 是酉矩阵。因此，可以令

$$
\mathbf{X} = \mathbf{U} \sigma^{-1/2} \mathbf{U}^\dagger
$$

使得

$$
\mathbf{X}^{\dagger} S \mathbf{X} = \mathbf{I}
$$

这样，我们就可以在HFR方程里拼凑出把 $\mathbf{S}$ 消掉的形式

$$
\begin{aligned}
\mathbf{F} \mathbf{C} & = \mathbf{S} \mathbf{X} \mathbf{X}^\dagger \mathbf{C} \epsilon \\
\mathbf{X}^\dagger \mathbf{F} \mathbf{C} & = \mathbf{X}^\dagger \mathbf{S} \mathbf{X} \mathbf{X}^\dagger \mathbf{C} \epsilon \\
(\mathbf{X}^\dagger \mathbf{F} \mathbf{X}) (\mathbf{X}^\dagger \mathbf{C}) & = (\mathbf{X}^\dagger \mathbf{S} \mathbf{X}) (\mathbf{X}^\dagger \mathbf{C}) \epsilon \\
\mathbf{F}' \mathbf{C}' & = \mathbf{C}' \epsilon
\end{aligned}
$$

之后，通过自洽场迭代（SCF）方法就可以求得这个方程的数值解。