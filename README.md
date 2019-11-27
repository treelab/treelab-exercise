# Create a templates list page. 创建模板列表页面.

## Image

- Please refer to the image sent along with this document, the image is in `/static/template-list.png`.（请参阅仓库中的最终效果图，图片位于`/static/template-list.png`中。）

### Prerequisite.（准备工作）

- Use node version 10 or above（使用 node 10 或更高版本）
- clone the repository from https://github.com/caminerinc/treelab-exercise （从 https://github.com/caminerinc/treelab-exercise  clone 代码库）
- create a new branch like `<your name>-exercise`（创建一个新的分支，如`<您的名字>-exercise`）
- after you are done, push up to this branch and tell us the branch name so we can check your code（将您的代码 push 到该分支，并告诉我们您的分支名称，以便我们检查您的代码）

### Step 1.（第一步）

- Use the repository we provided.（使用我们提供的代码库。）
- All the packages have already been added to `package.json`（所有需要用到的 package 都添加到了 `package.json`）
- It already has NextJS installed（已安装 NextJS）
- It has apollo integrated as well（已集成 Apollo）

### Step 2.（第二步）

- Create a file in `/pages/templates/index.tsx`.（在`/pages/templates/index.tsx`中创建一个文件。）
- When the user enters the page, do a graphql query to retrieve the necessary information.（当用户进入页面时，执行 graphql 请求以得到必要的信息。）
- To find which graphql query to use, go to http://treelab-gateway.jx-staging.treelab.io/graphql and take a look at the query `getTemplates`.（要查找使用哪个 graphql，请前往链接 http://treelab-gateway.jx-staging.treelab.io/graphql 然后找到`getTemplates`）
- Remember, you can choose which data to get from the backend. Make sure you don't get information you don't need.（请记住，您可以选择从后端获取哪些数据。确保您没有收到不需要的信息。）
- You need to read the docs in apollo graphql to figure out how to make this query in the component.（您需要阅读 apollo graphql 中的文档，以了解如何在组件中进行此查询。）

### Step 3.（第三步）

- Now you have the data from the query.（现在您有了查询的数据。）
- Render what we have in the image with the data（使用数据渲染出图片中的内容）
- Don't worry too much about CSS（不用太在意 CSS）

### Step 4.（第四步）

- Now, make it so that if I redirect to this link http://localhost:4001/templates/sales-customers, I will automatically get all the templates in the `sales-customers` category.（接下来，请完成需求：如果我重定向到此链接 http://localhost:4001/templates/sales-customers, 将自动获得 `sales-customers` 类别下的所有模板。）
- Make this flexible, so if I go to http://localhost:4001/templates/venture-capital, it will also get me the templates that are `venture-capital`.（请留意您逻辑的灵活性，所以当我转到 http://localhost:4001/templates/venture-capital, 它也会为我提供 `venture-capital`的模板。）

### Done.（完成）
