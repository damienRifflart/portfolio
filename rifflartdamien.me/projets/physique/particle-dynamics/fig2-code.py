import numpy as np
import plotly.graph_objects as go
from scipy.special import hermite
import math

n_x = 1
n_y = 1
n_z = 1
k_y = 1
m = 0.2
omega = 0.5
hbar = 1
p_z = 3
p_x = 3
t0 = 100

x = np.linspace(-100, 100, 200)
y = np.linspace(-100, 100, 200)
z = np.linspace(-100, 100, 200)

X, Y, Z = np.meshgrid(x, y, z, indexing='ij')

def gamma_x_func(X):
    return np.sqrt(m*omega/hbar) * (X + p_z/(m*omega))

def gamma_z_func(Z):
    return np.sqrt(m*omega/hbar) * (Z - p_x/(m*omega))

def N(n):
    return 1 / 2**(n/2) * math.sqrt(1 / (math.factorial(n) * math.sqrt(math.pi)))

def E_osc(n):
    return hbar * omega * (n + 0.5)

def E_free():
    return hbar**2 * k_y**2 / (2*m)

def phi_x(X, t):
    gamma_x = gamma_x_func(X)
    H = hermite(n_x)(gamma_x)
    return N(n_x) * H * np.exp(-gamma_x**2 / 2) * np.exp(-1j * E_osc(n_x) * t / hbar)

def phi_y(Y, t):
    return np.exp(1j * k_y * Y) * np.exp(-1j * E_free() * t / hbar)

def phi_z(Z, t):
    gamma_z = gamma_z_func(Z)
    H = hermite(n_z)(gamma_z)
    return N(n_z) * H * np.exp(-gamma_z**2 / 2) * np.exp(-E_osc(n_z) * t / hbar)


def phi(X, Y, Z, t):
    return phi_x(X, t) * phi_y(Y, t) * phi_z(Z, t)

value = phi(X, Y, Z, t0)
probability = np.abs(value)**2

fig = go.Figure(
    data=go.Isosurface(
        x=X.flatten(),
        y=Y.flatten(),
        z=Z.flatten(),
        value=probability.flatten(),
        isomin=probability.max()*0.01,
        isomax=probability.max(),
        surface_count=3,
        colorscale='Viridis',
    )
)

fig.update_layout(
    scene=dict(
        xaxis_title='x',
        yaxis_title='y',
        zaxis_title='z'
    ),
    title='3D Probability Density |ψ(x,y,z,0)|²'
)

fig.show()
