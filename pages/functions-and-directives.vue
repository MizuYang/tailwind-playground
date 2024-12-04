<script setup></script>

<template>
  <div>
    <PageTitle
      title="函數和指令"
      link="https://tailwind.nodejs.cn/docs/functions-and-directives"
    />

    <main class="pb-10">
      <SectionContent title="@layer @apply 提取樣式">
        <template #content>
          <button type="button" class="btn-primary test">按鈕</button>
        </template>
      </SectionContent>

      <SectionContent title="透過 @apply 提取整個類名">
        <template #content>
          <div class="card">
            <h2>Card</h2>
            <p>Card content</p>
          </div>
        </template>
      </SectionContent>
    </main>
  </div>
</template>

<style lang="scss" scope>
@tailwind components;

@layer components {
  .btn-primary {
    @apply rounded-lg bg-violet-600 px-3 py-2 text-white transition-all hover:rounded-none hover:bg-violet-500 #{!important};
  }
}
/** 測試 !important 可覆蓋此樣式 */
.test {
  background-color: pink;
}

.card-content {
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
}
.card-theme-dark {
  background-color: #000;
  color: grey;
}
.card-spacing {
  padding: 20px 30px;
}
@layer components {
  .card {
    @apply card-theme-dark card-content card-spacing;
  }
}
</style>
