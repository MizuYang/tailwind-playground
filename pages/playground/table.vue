<script setup></script>

<template>
  <div>
    <SectionContent title="Table">
      <template #content>
        <div class="mb-3">
          <h3 class="mb-3 text-red-700">table</h3>
          <table class="border border-solid border-gray-400 border-separate">
            <thead>
              <tr>
                <th class="border border-solid border-gray-400 bg-gray-200 p-4">
                  標題 1
                </th>
                <th class="border border-solid border-gray-400 bg-gray-200 p-4">
                  標題 2
                </th>
                <th class="border border-solid border-gray-400 bg-gray-200 p-4">
                  標題 3
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-solid border-gray-400 p-4">數據 1</td>
                <td class="border border-solid border-gray-400 p-4">數據 2</td>
                <td class="border border-solid border-gray-400 p-4">數據 3</td>
              </tr>
              <tr>
                <td class="border border-solid border-gray-400 p-4">數據 4</td>
                <td class="border border-solid border-gray-400 p-4">數據 5</td>
                <td class="border border-solid border-gray-400 p-4">數據 6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-3">
          <h3 class="mb-3 text-red-700">border-spacing-*</h3>
          <table class="border border-solid border-spacing-1 border-gray-400 border-separate">
            <thead>
              <tr>
                <th class="border border-solid border-gray-400 bg-gray-200 p-4">
                  標題 1
                </th>
                <th class="border border-solid border-gray-400 bg-gray-200 p-4">
                  標題 2
                </th>
                <th class="border border-solid border-gray-400 bg-gray-200 p-4">
                  標題 3
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-solid border-gray-400 p-4">數據 1</td>
                <td class="border border-solid border-gray-400 p-4">數據 2</td>
                <td class="border border-solid border-gray-400 p-4">數據 3</td>
              </tr>
              <tr>
                <td class="border border-solid border-gray-400 p-4">數據 4</td>
                <td class="border border-solid border-gray-400 p-4">數據 5</td>
                <td class="border border-solid border-gray-400 p-4">數據 6</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </SectionContent>
  </div>
</template>

<style lang="scss" scoped></style>
