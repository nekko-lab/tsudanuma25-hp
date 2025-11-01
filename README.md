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

## components

```mermaid
sequenceDiagram
    autonumber
    actor Developer
    participant GitHub as GitHub Repository
    participant Actions as GitHub Actions
    participant GHCR as GitHub Container Registry
    participant ArgoCD as ArgoCD
    participant K8s as On-Premise Kubernetes

    Developer->>GitHub: git push to main branch
    activate GitHub
    GitHub->>Actions: Trigger CI Workflow
    activate Actions
    
    Note over Actions: CI Job Start
    Actions->>Actions: Checkout code
    Actions->>GHCR: Login to GHCR
    Actions->>Actions: Build Docker image<br/>(from Dockerfile)
    Note over Actions: Multi-stage build:<br/>1. deps: npm install<br/>2. build: npm run build<br/>3. final: nginx with dist files
    Actions->>GHCR: Push image<br/>ghcr.io/nekko-lab/tsudanuma25-hp:{SHA}
    activate GHCR
    GHCR-->>Actions: Image pushed
    deactivate GHCR
    
    Actions->>Actions: Update manifest<br/>(fire-deployment.yaml)<br/>with new image tag
    Actions->>GitHub: Commit manifest changes<br/>"ci(fire): Update image to {SHA}"
    deactivate Actions
    
    Note over GitHub,ArgoCD: GitOps Pattern
    ArgoCD->>GitHub: Poll/Watch manifest changes<br/>(container/manifest/sync/)
    activate ArgoCD
    GitHub-->>ArgoCD: Detect new image tag in manifest
    
    ArgoCD->>ArgoCD: Sync application state
    ArgoCD->>K8s: Apply updated Deployment<br/>(fire-deployment.yaml)
    activate K8s
    K8s->>GHCR: Pull new image<br/>ghcr.io/nekko-lab/tsudanuma25-hp:{SHA}
    GHCR-->>K8s: Image pulled
    K8s->>K8s: Rolling update<br/>(replicas: 3)
    K8s-->>ArgoCD: Deployment successful
    deactivate K8s
    ArgoCD-->>Developer: Application synced
    deactivate ArgoCD
    deactivate GitHub
    
    Note over Developer,K8s: Service Exposure via Ingress & Cloudflare Tunnel
```

1. GitHub Actions CI パイプライン (自動化されたビルド・プッシュ)
開発者が main ブランチにプッシュ
GitHub Actions が自動トリガー
Docker イメージをビルド (マルチステージビルド: Node.js → Nginx)
GHCR (GitHub Container Registry) にプッシュ (ghcr.io/nekko-lab/tsudanuma25-hp:{SHA})
Kubernetes マニフェスト (fire-deployment.yaml) のイメージタグを自動更新
変更をコミット
2. ArgoCD による CD パイプライン (GitOps パターン)
ArgoCD がGitリポジトリの sync を監視
マニフェストの変更を検知
Kubernetesクラスタに自動デプロイ
ローリングアップデートでPodを更新 (レプリカ数: 3)
3. サービス公開
fire-svc がPodを公開
Ingress が numasai25.nekko-lab.dev でトラフィックをルーティング
Cloudflare Tunnel を使用して外部公開
このCI/CDパイプラインは、コードの変更から本番環境へのデプロイまでを完全に自動化し、GitOpsの原則に従ってインフラの状態をGitで管理しています。
