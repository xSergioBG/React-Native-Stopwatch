# React Native Stopwatch

Cronómetro móvil con React Native y Expo. Incluye inicio/pausa, reinicio y registro de vueltas.

## Instalación

El proyecto conserva Expo SDK 50, React 18.2 y React Native 0.73.4 en su manifiesto. Usa un entorno compatible con esa generación de Expo; migrarlo a una versión nueva requiere validar el conjunto.

```sh
git clone https://github.com/xSergioBG/React-Native-Stopwatch.git
cd React-Native-Stopwatch
npm ci
npm start
```

Comandos declarados:

| Comando | Propósito |
| --- | --- |
| `npm run android` | Iniciar Expo para Android |
| `npm run ios` | Iniciar Expo para iOS; simulador local requiere macOS |
| `npm run web` | Iniciar el modo web; revisar requisitos de Expo para esa plataforma |

## Código

- `App.js`: estado del tiempo, animación y vueltas.
- `app/components/`: reloj, temporizador, controles y lista de vueltas.

## Validación pendiente

Prueba inicio, pausa/reanudación, reinicio y vueltas en el dispositivo objetivo. Comprueba también qué ocurre al poner la aplicación en segundo plano. No hay una suite de pruebas declarada ni una ejecución móvil verificada por esta revisión.
