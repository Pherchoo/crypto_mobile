# Crypto Mobile

Configuración inicial con Expo y React Native. La pantalla muestra Hello World en una tarjeta blanca, sobre fondo gris y con texto morado. Los estilos se adaptaron de css (2) a StyleSheet.

## Requisitos

- Node.js 22.13 o posterior compatible con Expo SDK 58.
- Expo Go compatible con SDK 58 en Android, o emulador compatible.

## Ejecutar

```bash
npm ci
npx expo start --go
```

Conectar el celular y la computadora a la misma red y escanear el QR en Expo Go. Si la red impide la conexión, usar el túnel y seguir las instrucciones de Expo CLI:

```bash
npx expo start --go --tunnel
```

Resultado esperado: Hello World centrado en una tarjeta blanca. No requiere variables de entorno.

## Verificar

```bash
npm run lint
npm run typecheck
npx expo export --platform android
```

Se eliminaron las imágenes de plantilla y sus referencias en app.json. Los iconos personalizados se configurarán en una entrega posterior. El formulario de cotización queda fuera de esta entrega.
