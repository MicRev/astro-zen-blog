---
title: "手撕类氢原子薛定谔方程：球坐标下的拉普拉斯算符"
description: "把Laplacian变换到球坐标下"
date: 2023-10-30
tags: ["量子化学", "化材专业不会梦见手撕类氢原子薛定谔方程"]
---

需要注意的是，虽然在直角坐标系中有 $\partial_x e_y = 0$ 之类的很显然的结论，但在球坐标系中并非如此。下面列出计算细节：

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_r}}{\partial r} = & 0 \\
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_r}}{\partial \theta} = & \frac{\partial }{\partial \theta} \left( \sin \theta \cos \phi \boldsymbol{e_x} + \sin \theta \sin \phi \boldsymbol{e_y} + \cos \theta \boldsymbol{e_z} \right)\\
= & \cos \theta \cos \phi \boldsymbol{e_x} + \cos \theta \sin \phi \boldsymbol{e_y} - \sin \theta \boldsymbol{e_z} \\
= & \boldsymbol{e_\theta}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_r}}{\partial \phi} = & \frac{\partial }{\partial \phi} \left(  \sin \theta \cos \phi \boldsymbol{e_x} + \sin \theta \sin \phi \boldsymbol{e_y} + \cos \theta \boldsymbol{e_z} \right) \\
= & -\sin \theta\sin \phi \boldsymbol{e_x} + \sin \theta \cos \phi \boldsymbol{e_y} + 0 \boldsymbol{e_z} \\
= & \sin \theta \boldsymbol{e_\phi}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_\theta}}{\partial r} = 0 \\
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_\theta}}{\partial \theta} = & \frac{\partial }{\partial \theta} \left(
    \cos \theta \cos \phi \boldsymbol{e_x} + \cos \theta \sin \phi \boldsymbol{e_y} - \sin \theta \boldsymbol{e_z}
\right) \\
= & -\sin \theta \cos \phi e_x - \sin \theta \sin \phi e_y - \cos \theta e_z \\
= & - \boldsymbol{e_r}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_\theta}}{\partial \phi} = & \frac{\partial }{\partial \phi} \left(
    \cos \theta \cos \phi \boldsymbol{e_x} + \cos \theta \sin \phi \boldsymbol{e_y} - \sin \theta \boldsymbol{e_z}
\right) \\
= & -\cos \theta \sin \phi \boldsymbol{e_x} + \cos \theta \cos \phi \boldsymbol{e_y} + 0 \boldsymbol{e_z} \\
= & \cos \theta \boldsymbol{e_\phi}
\end{aligned}
$$

$$
\frac{\partial \boldsymbol{e_\phi}}{\partial r} = 0
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_\phi}}{\partial \theta} = & \frac{\partial }{\partial \theta} \left(
    -\sin \phi \boldsymbol{e_x} + \cos \phi \boldsymbol{e_y}
\right) \\
= & 0
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial \boldsymbol{e_\phi}}{\partial \phi} = & \frac{\partial }{\partial \phi} \left(
    -\sin \phi \boldsymbol{e_x} + \cos \phi \boldsymbol{e_y}
\right) \\
= & -\cos \phi \boldsymbol{e_x} - \sin \phi \boldsymbol{e_y} \\
= & -\sin \theta \boldsymbol{e_r} - \cos \theta \boldsymbol{e_\theta}
\end{aligned}
$$

总结一下

$$
\frac{\partial (\boldsymbol{e_r}, \boldsymbol{e_\theta}, \boldsymbol{e_\phi})}{\partial (r, \theta, \phi)} = 
\begin{bmatrix}
    0 & \boldsymbol{e_\theta} & \sin \theta \boldsymbol{e_\phi} \\
    0 & -\boldsymbol{e_r} & \cos \theta \boldsymbol{e_\phi} \\
    0 & 0 & -\sin \theta \boldsymbol{e_r} - \cos \theta \boldsymbol{e_\theta}
\end{bmatrix}
$$

现在，我们终于可以回到拉普拉斯算符的计算中。用球坐标基矢表示，nabla算符为

$$
\begin{aligned}
\nabla = & \boldsymbol{e_x} \frac{\partial }{\partial x} +  \boldsymbol{e_y} \frac{\partial }{\partial y} + \boldsymbol{e_z} \frac{\partial }{\partial z} \\
= & \begin{bmatrix} 
    \boldsymbol{e_x} & \boldsymbol{e_y} & \boldsymbol{e_z} 
\end{bmatrix}  \left( \frac{\partial (r, \theta, \phi)}{\partial (x, y, z)} \right)^T \cdot \begin{bmatrix} 
    \partial_r \\ \partial_\theta \\ \partial_\phi
\end{bmatrix}  \\
= & \begin{bmatrix} 
    \boldsymbol{e_x} & \boldsymbol{e_y} & \boldsymbol{e_z} 
\end{bmatrix} \mathbf{A} \cdot \mathbf{C} \begin{bmatrix} 
    \partial_r \\ \partial_\theta \\ \partial_\phi
\end{bmatrix} \\
= & \begin{bmatrix} 
    \boldsymbol{e_r} & \boldsymbol{e_\theta} & \boldsymbol{e_\phi} 
\end{bmatrix} \cdot \mathbf{C} \cdot 
\begin{bmatrix} 
    \partial_r \\ \partial_\theta \\ \partial_\phi
\end{bmatrix} \\
= & \boldsymbol{e_r} \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi}
\end{aligned}
$$

接着计算拉普拉斯算符

$$
\begin{aligned}
\nabla^2 = & \nabla \cdot \nabla  = \left(
    \boldsymbol{e_r} \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi}
\right)^2 \\
= & \left(
    \boldsymbol{e_r} \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi}
\right) \left(
    \boldsymbol{e_r} \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi}
\right)
\end{aligned}
$$

注意求导的运算顺序。如，当计算第一项

$$
\boldsymbol{e_r} \frac{\partial }{\partial r} \left( \boldsymbol{e_r} \frac{\partial }{\partial r} \right)
$$

时，正确的做法应该是

$$
\boldsymbol{e_r} \frac{\partial }{\partial r} \left( \boldsymbol{e_r} \frac{\partial }{\partial r} \right) = \boldsymbol{e_r} (\frac{\partial }{\partial r} \boldsymbol{e_r}) \frac{\partial }{\partial r} + \boldsymbol{e_r} \cdot \boldsymbol{e_r} \frac{\partial }{\partial r} \left( \frac{\partial }{\partial r} \right) = \frac{\partial^2 }{\partial r^2}
$$

照此，计算每一项，共计算九项

$$
\begin{aligned}
\boldsymbol{e_r} \frac{\partial }{\partial r} \left(\frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \right) = & \boldsymbol{e_r} \left( \frac{\partial }{\partial r} \frac{\boldsymbol{e_\theta}}{r} \right) \frac{\partial }{\partial \theta} + \boldsymbol{e_r} \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial r} \frac{\partial }{\partial \theta} = 0
\end{aligned}
$$

$$
\begin{aligned}
\boldsymbol{e_r} \frac{\partial }{\partial r} \left(\frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \right) = & \boldsymbol{e_r} \left( \frac{\partial }{\partial r} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \right) \frac{\partial }{\partial \phi} + \boldsymbol{e_r} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial r} \frac{\partial }{\partial \phi} = 0
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \left(\boldsymbol{e_r} \frac{\partial }{\partial r} \right) = & \frac{\boldsymbol{e_\theta}}{r} \left( \frac{\partial }{\partial \theta} \boldsymbol{e_r} \right) \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\theta}}{r} \boldsymbol{e_r} \frac{\partial }{\partial \theta} \frac{\partial }{\partial r} \\
= & \frac{1}{r} \frac{\partial }{\partial r} + 0 = \frac{1}{r} \frac{\partial }{\partial r}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \left(\frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \right) = & \frac{\boldsymbol{e_\theta}}{r} \left( \frac{\partial }{\partial \theta} \frac{\boldsymbol{e_\theta}}{r} \right) \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\theta}}{r} \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \frac{\partial }{\partial \theta} \\
= & \frac{\boldsymbol{e_\theta}}{r} \left( - \frac{\boldsymbol{e_r}}{r} \right) \frac{\partial }{\partial \theta} + \frac{1}{r^2} \frac{\partial^2}{\partial \theta} = \frac{1}{r^2} \frac{\partial^2 }{\partial \theta^2}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \left(\frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \right) = & \frac{\boldsymbol{e_\theta}}{r} \left( \frac{\partial }{\partial \theta} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \right) \frac{\partial }{\partial \phi} + \frac{\boldsymbol{e_\theta}}{r} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \theta} \frac{\partial }{\partial \phi} \\
= & \frac{\boldsymbol{e_\theta}}{r} \left(
    \frac{\partial }{\partial \theta} \boldsymbol{e_\phi} \cdot \frac{1}{ r\sin \theta} + \boldsymbol{e_\phi} \frac{\partial }{\partial \theta} \frac{1}{r \sin \theta}
\right) \frac{\partial }{\partial \theta} +  \frac{\boldsymbol{e_\theta}}{r} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \theta} \frac{\partial }{\partial \phi} \\
= & 0 + 0 + 0 = 0
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \left(\boldsymbol{e_r} \frac{\partial }{\partial r} \right) = & \frac{\boldsymbol{e_\phi}}{r\sin \theta} \left( \frac{\partial }{\partial \phi} \boldsymbol{e_r} \right) \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \boldsymbol{e_r} \frac{\partial }{\partial \phi} \frac{\partial }{\partial r} \\
= & \frac{\boldsymbol{e_\phi}}{r\sin \theta} \sin \theta \boldsymbol{e_\phi} \frac{\partial }{\partial r} + 0 = \frac{1}{r} \frac{\partial }{\partial r}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \left(\frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} \right) = & \frac{\boldsymbol{e_\phi}}{r\sin \theta} \left( \frac{\partial }{\partial \phi} \frac{\boldsymbol{e_\theta}}{r} \right) \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \phi} \frac{\partial }{\partial \theta} \\
= & \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\cos \theta \boldsymbol{e_\phi}}{r} \frac{\partial }{\partial \theta} + 0 = \frac{1}{r^2} \cot \theta \frac{\partial }{\partial \theta}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \left(\frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \right) = & \frac{\boldsymbol{e_\phi}}{r\sin \theta} \left( \frac{\partial }{\partial \phi} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \right) \frac{\partial }{\partial \phi} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi} \frac{\partial }{\partial \phi} \\
= & \frac{\boldsymbol{e_\phi}}{r\sin \theta} \left( -\sin \theta \boldsymbol{e_r} - \cos \theta \boldsymbol{e_\theta} \right) \frac{1}{r} \frac{\partial }{\partial \phi} + \frac{1}{r^2 \sin^2 \theta} \frac{\partial^2}{\partial \phi}
\end{aligned}
$$

然后把他们加起来得到拉普拉斯算符的表达式

$$
\begin{aligned}
\nabla^2 = & \left(
    \boldsymbol{e_r} \frac{\partial }{\partial r} + \frac{\boldsymbol{e_\theta}}{r} \frac{\partial }{\partial \theta} + \frac{\boldsymbol{e_\phi}}{r\sin \theta} \frac{\partial }{\partial \phi}
\right)^2 \\
= & \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial^2 }{\partial r^2} + \frac{1}{r^2}\left( \cot \theta \frac{\partial }{\partial \theta} + \frac{\partial^2}{\partial \theta^2} + \frac{1}{\sin^2 \theta} \frac{\partial^2}{\partial \phi} \right)
\end{aligned}
$$

现在让我们回头看看薛定谔方程变成什么样了

$$
\frac{-\hbar^2}{2m_e} \left( \frac{2}{r} \frac{\partial }{\partial r} + \frac{\partial^2 }{\partial r^2} + \frac{1}{r^2}\left( \cot \theta \frac{\partial }{\partial \theta} + \frac{\partial^2}{\partial \theta^2} + \frac{1}{\sin^2 \theta} \frac{\partial^2}{\partial \phi} \right) \right) \psi(r, \theta, \phi) - \frac{Ze^2}{4\pi \epsilon_0 r}  \psi(r, \theta, \phi) = E \psi(r, \theta, \phi)
$$

呃……虽然看起来又变长了一点，但实际上已经能看出来一点可解的端倪了。这个方程的形式已经呈现出某种程度上的变量分离，拉普拉斯的前两项只与 $r$ 相关，而后三项除了前面的系数 $1 / r^2$ 都只与角度相关，这似乎暗示我们要对波函数进行变量分离。在下一章里，我们会看到这种变量分离是如何可行的。