# Create a templates list page. 创建模板列表页面.

## Image

- Please refer to the image sent along with this document.
- The image is in `/static/template-list.png`

- 请参阅与本文档一起发送的图像。
- 图片位于`/static/template-list.png`中

### Prerequisite.

- Use node version 10 or above
- clone the repository from `https://github.com/caminerinc/treelab-exercise`
- create a new branch like `<your name>-exercise`
- after you are done, push up to this branch and tell us the branch name so we can check your code

- 使用 node 版本 10 或更高版本
- 从`https://github.com/caminerinc/treelab-exercise`复制存储库
- 创建一个新的分支，如`<您的名字>-exercise`
- 完成后，向上推至该分支并告诉我们分支名称，以便我们检查您的代码

### Step 1.

- Use the repository we provided.
- All the packages have already been downloaded and set up for you
- It already has NextJS installed
- It has apollo integrated as well

- 使用我们提供的存储库。
- 所有软件包均已下载并为您设置
- 它已经安装了 NextJS
- 它也集成了阿波罗

### Step 2.

- Create a file in `/pages/templates/index.tsx`.
- When the user enters the page, do a graphql query to retrieve the necessary information.
- To find which graphql query to use, go to `http://treelab-gateway.jx-staging.treelab.io/graphql` and take a look at the query `getTemplates`.
- Remember, you can choose which data to get from the backend. Make sure you don't get information you don't need.
- You need to read the docs in apollo graphql to figure out how to make this query in the component.

- 在`/pages/templates/index.tsx`中创建一个文件。
- 当用户进入页面时，执行 graphql 查询以检索必要的信息。
- 要查找要使用的 graphql 查询，请转到`http://treelab-gateway.jx-staging.treelab.io/graphql`，然后查看查询`getTemplates`。
- 请记住，您可以选择从后端获取哪些数据。确保您没有收到不需要的信息。
- 您需要阅读 apollo graphql 中的文档，以了解如何在组件中进行此查询。

### Step 3.

- Now you have the data from the query.
- Render what we have in the image with the data
- Don't worry too much about CSS

- 现在您有了查询的数据。
- 使用数据渲染图像中的内容
- 不用太担心 CSS

### Step 4.

- Now, make it so that if I redirect to this link `http://localhost:4001/templates/sales-customers`, I will automatically get all the templates in the `sales-customers` category.
- Make this flexible, so if I go to `http://localhost:4001/templates/venture-capital`, it will also get me the templates that are `venture-capital`.

- 让后，进行设置，以便如果我重定向到此链接 `http://localhost:4001/templates/sales-customers`，我将自动获得 `sales-customers` 类别中的所有模板。
- 使其具有灵活性，因此，如果我转到`http://localhost:4001/templates/venture-capital`，它也会为我提供 `venture-capital`的模板。

### Done.
