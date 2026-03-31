---
title: "手撕类氢原子薛定谔方程：球坐标下的角动量算符"
description: "把角动量算符变换到球坐标下"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

我们先来复习一下量子力学中的角动量：

$$
\hat{L} = \hat{r} \times \hat{p} = - i \hbar
\left( x , y, z \right)
\times
\nabla  = - i \hbar \left \vert
    \begin{aligned}
    & \hat{i} && \hat{j} && \hat{k} \\
    & x && y && z \\
    & \partial_x && \partial_y && \partial_z
    \end{aligned}
 \right \vert
$$

三个分量分别为

$$
\hat{L}_x = i\hbar (\sin \phi \frac{\partial }{\partial \theta} + \cot \theta \cos \phi \frac{\partial }{\partial \phi}) \\
\hat{L}_y = - i\hbar (\cos \phi \frac{\partial }{\partial \theta} - \cot \theta \sin \phi \frac{\partial }{\partial \phi}) \\
\hat{L}_z = -i\hbar \frac{\partial }{\partial \phi}
$$

观察到

$$
[\hat{L}_x, \hat{L}_y] = i\hbar \hat{L}_z \\
[\hat{L}_z, \hat{L}_x] = i\hbar \hat{L}_y \\
[\hat{L}_y, \hat{L}_z] = i\hbar \hat{L}_x \\
$$

和

$$
[\hat{L}^2, \hat{L}_x] = [\hat{L}^2, \hat{L}_y] = [\hat{L}^2, \hat{L}_z] = 0
$$

当然我们也可以在球坐标下这样写：

$$
\begin{aligned}
\hat{L} = & \hat{r} \times \hat{p} = (r, 0, 0) \times (-i \hbar) \nabla  \\
= & -i\hbar \left | 
    \begin{aligned}
    & \boldsymbol{e_r} && \boldsymbol{e_\theta} && \boldsymbol{e_\phi} \\
    & r && 0 && 0 \\
    & \partial_r && \frac{\partial_\theta}{r} && \frac{\partial_\phi}{r \sin \theta} 
    \end{aligned}
\right | \\
= & i \hbar \left( -\frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi}  + \boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \right)
\end{aligned}
$$

事实上两者是一样的，读者可自证。值得注意的是角动量算符中完全没有 $r$ 的成分。

这样写的好处是我们算角动量平方 $\hat{L}^2$ 算符就很方便，只有四项（比前面拉普拉斯少多了）。

$$
\hat{L}^2 = - \hbar^2 \left(- \frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi}  + \boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \right) \cdot \left( - \frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi}  + \boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \right)
$$

同样我们计算四项

$$
\begin{aligned}
\frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi} \left(\frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi} \right) = & \frac{\boldsymbol{e_\theta}}{\sin \theta} \left( \frac{\partial }{\partial \phi} \frac{\boldsymbol{e_\theta}}{\sin \theta} \right) \frac{\partial }{\partial \phi} + \frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi} \frac{\partial }{\partial \phi} \\
= & 0 + \frac{1}{\sin ^2 \theta} \frac{\partial^2}{\partial \phi^2} = \frac{1}{\sin ^2 \theta} \frac{\partial^2}{\partial \phi^2}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi} \left(\boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \right) = & \frac{\boldsymbol{e_\theta}}{\sin \theta} \left( \frac{\partial }{\partial \phi} \boldsymbol{e_\phi} \right) \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\theta}}{\sin \theta} \boldsymbol{e_\phi} \frac{\partial }{\partial \phi} \frac{\partial }{\partial \theta} \\
= & \frac{\boldsymbol{e_\theta}}{\sin \theta} \left( -\sin \theta \boldsymbol{e_r} - \cos \theta \boldsymbol{e_\theta} \right) \frac{\partial }{\partial \theta} + 0 = - \cot \theta \frac{\partial }{\partial \theta}
\end{aligned}
$$

$$
\begin{aligned}
\boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \left(\frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \phi} \right) = & \boldsymbol{e_\phi} \left( \frac{\partial }{\partial \theta} \frac{\boldsymbol{e_\theta}}{\sin \theta} \right) \frac{\partial }{\partial \phi} + \boldsymbol{e_\phi} \frac{\boldsymbol{e_\theta}}{\sin \theta} \frac{\partial }{\partial \theta} \frac{\partial }{\partial \phi} \\
= & 0 + 0 = 0
\end{aligned}
$$

$$
\begin{aligned}
\boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \left(\boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \right) = & \boldsymbol{e_\phi} \left( \frac{\partial }{\partial \theta} \boldsymbol{e_\phi} \right) \frac{\partial }{\partial \theta} + \boldsymbol{e_\phi} \boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \frac{\partial }{\partial \theta} \\
= & 0 + \frac{\partial ^2}{\partial \theta^2}
\end{aligned}
$$

加起来，注意原式里的正负号：

$$
\hat{L}^2 = -\hbar^2 \left( \frac{\partial ^2}{\partial \theta^2} + \cot \theta \frac{\partial }{\partial \theta} + \frac{1}{\sin ^2 \theta} \frac{\partial ^2}{\partial \phi^2} \right)
$$

这与我们学过的表达式的形式是一样的。

这时，相信注意力充沛的读者已经有能力注意到，我们上一节推过的拉普拉斯算符长这样：

$$
\nabla ^2 = \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial^2 }{\partial r^2} + \frac{1}{r^2}\left( \cot \theta \frac{\partial }{\partial \theta} + \frac{\partial^2}{\partial \theta^2} + \frac{1}{\sin^2 \theta} \frac{\partial^2}{\partial \phi} \right)
$$

后面与角度有关的项的形式刚好与角动量算符只差一个常数。因此，我们把拉普拉斯算符整理如下：

$$
\nabla ^2 = \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial ^2}{\partial r^2} - \frac{1}{\hbar^2 r^2} \hat{L}^2
$$

或

$$
\nabla ^2 = \frac{1}{r^2} \left( \frac{\partial }{\partial r} \left( r^2 \frac{\partial }{\partial r} \right) - \frac{1}{\hbar^2} \hat{L}^2 \right)
$$

这是一个好消息，因为如果我们考虑哈密顿算符和角动量平方算符的对易关系：

$$
\begin{aligned}
[\hat{H}, \hat{L}^2] = & -\frac{\hbar^2}{2m} [\nabla ^2, \hat{L}^2] + [\hat{V}, \hat{L}^2] \\
= & -\frac{\hbar^2}{2m} [\frac{\partial }{\partial r} \left( r^2 \frac{\partial }{\partial r} \right), \hat{L}^2] + \frac{1}{2m} [\frac{\hat{L}^2}{r^2}, \hat{L}^2] + [- \frac{Ze^2}{4\pi \epsilon_0 r}, \hat{L}^2] \\
= & 0 + 0 + 0 = 0
\end{aligned}
$$

这意味着，一个角动量算符的本征函数也会是哈密顿算符的本征函数，而前者可以只含 $\theta, \phi$ 两变量。如果要考虑哈密顿算符中的径向部分，会将我们引向变量分离：

$$
\psi(r, \theta, \phi) = R(r)Y(\theta, \phi)
$$

这样就有

$$
\hat{L}^2 Y(\theta, \phi) = c Y(\theta, \phi)\\
\hat{L}^2 R(r)Y(\theta, \phi) = R(r) \hat{L}^2 Y(\theta, \phi) = c R(r) Y(\theta, \phi)
$$

其中 $c$ 是我们假定的本征值。因此，为了解哈密顿算符的本征函数，我们的工作就变成了分别解出径向部分 $R(r)$ 和角度部分 $Y(\theta, \phi)$。

> 这个过程在数学上可能（几乎一定是）不合理的，凭什么 $\psi$ 这么巧就能写成他俩的乘积？但这不是数学，这是物理，and it just works, so shut up and calculate。