---
title: "从零开始的Hartree Fock：Hartree Fock方程"
description: "Hartree Fock方程的推导及形式"
date: 2024-04-20
tags: ["量子化学", "从零开始的Hartree Fock生活"]
---

我们已经知道了Condon Slater规则给出的能量表达式：

$$
\begin{aligned}
E & = \sum_i^N h_i + \frac{1}{2} \sum_i^N \sum_j^N \left( J_{ij} - K_{ij} \right) \\
& = \sum_{i}^N \left<\psi_i\right| \hat{h} \left|\psi_i\right> + \frac{1}{2} \sum_i^N \sum_j^N \left( \left<\psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \psi_j\right> \right)
\end{aligned}
$$

一个基态波函数应当具有最低的能量——Fock抱着这样的想法，意识到要想求出每个轨道的波函数，实际上是在求一个变分问题：总能量作为泛函，变量则是轨道波函数。另外无论何时都应该保证轨道波函数的正交归一性，这为这个变分问题提供了约束。于是Fock采用类似Lagrange乘因子法的条件变分法，构造出以下变分问题：

$$
\begin{aligned}
\delta E - \delta \sum_i \sum_j \epsilon_{ij} S_{ij} = 0 \\
\end{aligned}
$$

由于后一项是常数，因此其变分为0。将变分形式展开：

$$
\sum_i^N \left( \left<\delta \psi_i\right| \hat{h} \left|\psi_i\right> + \left<\psi_i\right| \hat{h} \left|\delta \psi_i\right> \right) \\ + \frac{1}{2} \sum_{i,j}^N (
    \left<\delta \psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \psi_j\right> + 
    \left<\psi_i \delta \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \psi_j\right> + \\
    \left<\psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\delta \psi_i \psi_j\right> + 
    \left<\psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \delta \psi_j\right>
) - \\ 
\left(
    \sum_{i, j}^N \epsilon_{ij} \left<\delta \psi_i | \psi_j\right> + 
    \sum_{i, j}^N \epsilon_{ij} \left<\psi_i | \delta \psi_j\right>
\right) = 0
$$

一部分式子在左矢里有变分的函数，另一部分在右矢里有变分的函数，两者是对称的，不妨先试着化简前者。

$$
\sum_i^N  \left<\delta \psi_i\right| \hat{h} \left|\psi_i\right> + \sum_{i, j}^N \left<\delta \psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \psi_j\right> - \sum_{i, j}^N \epsilon_{ij} \left<\delta \psi_i | \psi_j\right>
$$

我们希望把 $\delta \psi_i$ 提出到左边，剩下一系列某算符作用 $\left|\psi_i\right>$ ，以此得到关于 $\left|\psi_i\right>$ 的方程。单电子项和重叠积分项都很好处理，主要难点在于中间的双电子积分项。不妨设**库伦算符**和**交换算符**

$$
\hat{J}_j \psi_i(r_i) = \int \psi_j^*(r_j) \frac{1}{r_{ij}} \psi_j(r_j) dr_j \psi_i(r_i) \\
\hat{K}_j \psi_i(r_i) = \int \psi_j^*(r_j) \frac{1}{r_{ij}} \psi_i(r_j) dr_j \psi_j(r_i)
$$

这样，双电子积分就可以被表示为

$$
\left<\psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \psi_j\right> = \left<\psi_i\right| \hat{J}_j \left|\psi_i\right> - \left<\psi_i\right| \hat{K}_j \left|\psi_i\right>
$$

于是，把上式化简为我们需要的形式：

$$
\begin{aligned}
& \sum_i^N  \left<\delta \psi_i\right| \hat{h} \left|\psi_i\right> + \sum_{i, j}^N \left<\delta \psi_i \psi_j\right| \hat{g} (1-\hat{P}_{ij}) \left|\psi_i \psi_j\right> - \sum_{i, j}^N \epsilon_{ij} \left<\delta \psi_i | \psi_j\right> \\
= & \sum_i^N \left<\delta \psi_i\right| \left( \hat{h} \left|\psi_i\right> + \sum_j^N (\hat{J}_j - \hat{K}_j) \left|\psi_i\right> - \sum_j^N \epsilon_{ij} \left|\psi_j\right> \right) = 0
\end{aligned}
$$

另一半方程拥有类似的形式，据此我们可以给出单个轨道的方程：

$$
\left( \hat{h} + \sum_j^N (\hat{J}_j - \hat{K}_j) \right) \psi_i = \sum_j^N \epsilon_{ij} \psi_j
$$

或定义Fock算符 $\hat{F} = \hat{h} + \sum_j^N (\hat{J}_j - \hat{K}_j)$ （应当注意到Fock算符是一个厄米算符），则有

$$
\hat{F} \psi_i = \sum_j^N \epsilon_{ij} \psi_j
$$

可以将它看成矩阵形式

$$
\left[ \begin{matrix}
    \hat{F} \psi_1 \\ \vdots \\ \hat{F} \psi_N
\end{matrix} \right] 
= \left[
    \begin{matrix}
        \epsilon_{11} & \cdots & \epsilon_{N1} \\
        \vdots & \ddots & \vdots \\
        \epsilon_{1N} & \cdots & \epsilon_{NN}
    \end{matrix}
\right]
\left[ \begin{matrix}
    \psi_1 \\ \vdots \\ \psi_N
\end{matrix} \right] 
$$

可以合理地认为 $\epsilon_{ij}$ 是一个实对称矩阵，因为在上式中交换ij并没有什么明显的不同。因此，这个矩阵可以被酉分解：

$$
\left[ \begin{matrix}
    \hat{F} \psi_1 \\ \vdots \\ \hat{F} \psi_N
\end{matrix} \right] 
= \mathrm{U}^T \operatorname{diag}\{\epsilon_{i}\} \mathrm{U}
\left[ \begin{matrix}
    \psi_1 \\ \vdots \\ \psi_N
\end{matrix} \right] 
$$

两边同乘酉矩阵 $\mathrm{U}$

$$
\mathrm{U} \left[ \begin{matrix}
    \hat{F} \psi_1 \\ \vdots \\ \hat{F} \psi_N
\end{matrix} \right] = \operatorname{diag}\{\epsilon_{i}\} \mathrm{U}
\left[ \begin{matrix}
    \psi_1 \\ \vdots \\ \psi_N
\end{matrix} \right] 
$$

Fock算符是厄米算符，因而是线性算符，故它和线性组合是可交换的：

$$
\hat{F} \mathrm{U} \left[ \begin{matrix}
    \psi_1 \\ \vdots \\ \psi_N
\end{matrix} \right] = \operatorname{diag}\{\epsilon_{i}\} \mathrm{U}
\left[ \begin{matrix}
    \psi_1 \\ \vdots \\ \psi_N
\end{matrix} \right] 
$$

$\psi_i$ 是一组正交归一函数，而 $\mathrm{U}$ 是一个酉矩阵，因此 $\mathrm{U} \left[ \psi_1 \cdots \psi_N \right]^T$ 也是一组正交归一的函数。不妨把这组函数记为 $\phi_i$，则有

$$
\hat{F} \phi_i = \epsilon_i \phi_i
$$

这样就得到了一组正交归一的单电子轨道波函数，这个方程就叫做Hartree Fock方程。

这个方程与Hartree提出的方程非常像，而Hartree Fock方程多出来的部分就是交换积分带来的交换算符 $\hat{K}$ ，这是由电子的费米子性质带来的。因此，Hartree的错误在于没有考虑电子交换反对称的特性，从而忽略了交换作用带来的能量变化。