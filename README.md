# AtomicLabs app

> Esta prueba fue hecha con esfuerzo espero les guste :)

## Prerequisitos

Para correr el proyecto se necesitan los siguientes requisitos:

- [Node.js](https://nodejs.org/) instalado
- [Expo CLI](https://docs.expo.dev/get-started/installation/) instalado (`npm install -g expo-cli`)
- [Expo Go](https://expo.dev/client) app instalada en tu dispositivo móvil (opcional)

## Instalación

Necesitas seguir los siguientes pasos para la instalación del proyecto:

1. Clonar el repositorio y navegar a la carpeta creada:

```bash
   git clone https://github.com/rrasconc/atomiclabs.git
   cd atomiclabs
```

2. Instalar las dependencias:

```bash
   yarn install
```

3. Agregar archivo `.env` en el folder raíz con la siguiente variable de entorno:

```bash
   EXPO_PUBLIC_API_URL=https://atomic-test-api.onrender.com
```

## Uso

Para correr el proyecto solo hace falta usar el siguiente comando:

```bash
   yarn start
```

Con esto se inicia el servidor de desarrollo de Expo y podrás escanear el código QR en tu dispositivo móvil

Para correr el proyecto en el emulador puedes presionar la tecla `i` (iOS) o `a` (Android) en la terminal una vez que el servidor de desarrollo de Expo esté activo:

También puedes utilizar los siguientes comandos para arrancar el servidor de desarrollo y correr la app en el emulador:

Android:

```bash
    yarn android
```

iOS

```bash
    yarn ios
```
