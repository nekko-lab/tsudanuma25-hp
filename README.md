# Fire!〜Miku's Origin Live2025〜 in 第 76 回 津田沼祭 Web page

produced by Nekko Lab

### [Web page](https://numasai2025.nekko-lab.dev/)

## Start dev server

```shell
npm install
npm run dev
```

## Build server

```shell
npm run build
```

## Build image

```shell
docker build -f container/Dockerfile -t numa2025_fire .
```

## Run container

```shell
docker run -d -p 80:8080 numa2025_fire
```
