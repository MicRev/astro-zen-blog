---
title: "从零开始的Hartree Fock：空间轨道的Hartree Fock方程"
description: "引入自旋后将自旋轨道单独提出，剩下的空间轨道的Hartree Fock方程"
date: 2024-04-20
tags: ["量子化学", "从零开始的Hartree Fock生活"]
---

# 6. 空间轨道的Hartree Fock方程

电子是有自旋的，且自旋波函数和空间波函数是可分离的。在计算中，如果能将抽象的轨道波函数 $\phi_i$ 细分为自旋波函数和空间波函数并分开考量，就可以根据分子自身的具体电子组态来简化方程，从而只需要考虑空间波函数。

一个轨道波函数 $\phi_i$ 可以进行如下分离：

$$
\phi_i = \psi_i \sigma_i
$$

前者是空间部分波函数，后者是自旋部分波函数，满足 $\left<\sigma_i | \sigma_j\right> = \delta_{\alpha \beta}$ 。在一个闭壳层的分子中，每个空间轨道都被两个自旋相反的电子占据，即

$$
\Psi = \prod_{i}^{N} \psi_i \alpha_i \psi_i \beta_i
$$

其中N是空间轨道的数目。将它带入Condon Slater给出的能量展开式

$$
\begin{aligned}
\left<\Psi\right| \hat{H} \left|\Psi\right> & = \sum_{i}^{N} \left( \left<\psi_i\right| \hat{h} \left|\psi_i\right> \left<\alpha | \alpha\right> + \left<\psi_i\right| \hat{h} \left|\psi_i\right> \left<\beta | \beta\right> \right) \\ & + 
\frac{1}{2} \sum_{i}^N \sum_{j}^N ( \left<\psi_i \psi_j\right| \hat{g} \left|\psi_i \psi_j\right> \sum_{\sigma_i, \sigma_j}^{\alpha, \beta} \left( \left<\sigma_i \sigma_j | \sigma_i \sigma_j\right> \right) \\ & - \left<\psi_i \psi_j\right| \hat{g} \left|\psi_j \psi_i\right> \sum_{\sigma_i, \sigma_j}^{\alpha, \beta} \left( \left<\sigma_i \sigma_j | \sigma_j \sigma_i\right> \right) )
\end{aligned}
$$

自旋波函数和单电子、双电子算符是独立的，因此可以单独提出来。另外，应该意识到

$$
\begin{aligned}
\left<\sigma_i \sigma_j | \sigma_l \sigma_n\right> & = \int \sigma_i^*(r_1) \int \sigma_j^*(r_2) \sigma_n(r_2) dr_2 \sigma_l^*(r_1) dr_1 \\
& = \int \sigma_i^*(r_1) \sigma_l^*(r_1) dr_1 \int \sigma_j^*(r_2) \sigma_n(r_2) dr_2 \\
& = \left<\sigma_i | \sigma_l\right> \left<\sigma_j | \sigma_n\right> \\
& = \delta_{\sigma_i \sigma_l} \delta_{\sigma_j \sigma_n} 
\end{aligned}
$$

因此，带入上面的能量展开式得到

$$
\begin{aligned}
\left<\Psi\right| \hat{H} \left|\Psi\right> & = 2 \sum_{i}^{N} \left<\psi_i\right| \hat{h} \left|\psi_i\right> \\ & + 
\frac{1}{2} \sum_{i}^N \sum_{j}^N ( \left<\psi_i \psi_j\right| \hat{g} \left|\psi_i \psi_j\right> \sum_{\sigma_i, \sigma_j}^{\alpha, \beta} \delta_{\sigma_i \sigma_i} \delta_{\sigma_j \sigma_j} \\ & - \left<\psi_i \psi_j\right| \hat{g} \left|\psi_j \psi_i\right> \sum_{\sigma_i, \sigma_j}^{\alpha, \beta} \delta_{\sigma_i \sigma_j} \delta_{\sigma_j \sigma_i} ) \\
& = 2 \sum_{i}^{N} \left<\psi_i\right| \hat{h} \left|\psi_i\right> + \sum_{i}^N \sum_{j}^N \left( 2 \left<\psi_i \psi_j\right| \hat{g} \left|\psi_i \psi_j\right> - \left<\psi_i \psi_j\right| \hat{g} \left|\psi_j \psi_i\right> \right) \\
& = 2 \sum_i^N h_i + \sum_{i}^N \sum_{j}^N ( 2J_{ij} - K_{ij} )
\end{aligned}
$$

同样地，带入Hartree Fork方程可以得到轨道能量

$$
\begin{aligned}
\epsilon_i & = \left<\psi_i \sigma_i\right| \hat{F} \left|\psi_i \sigma_i\right>  \\
& = \left<\psi_i \sigma_i\right| \hat{h} + \sum_j^{N_\alpha + N_\beta} (\hat{J}_j - \hat{K}_j) \left|\psi_i \sigma_i\right> \\
& = h_i + \sum_{j}^N (2J_{ij} - K_{ij})
\end{aligned}
$$

这种方法被称为限制Hartree Fock（Ristricted Hartree Fork, RHF）。同样地，如果考虑非闭壳层的分子体系，根据对电子不同的限制方式，可以得到Restricted-Open Hartree Fock（ROHF）和Unrestricted Hartree Fock（UHF）方法。