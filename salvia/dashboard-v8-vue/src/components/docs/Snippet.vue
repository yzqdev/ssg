<script setup>
const snippets = `
    <Accordion>
      <template #item>
        <document-icon /> <span class="pl-3">Documents</span>
      </template>
      <template #panel>
        <sidenav-item title="Taxes" to="/documents/taxes" />
        <sidenav-item title="Travel" to="/documents/travel" />
        <sidenav-item title="Insurance" to="/documents/insurance" />
      </template>
    </Accordion>`;
</script>

<template>
  <pre
    class="max-w-full overflow-x-auto rounded border bg-gray-100 px-4 py-1 font-mono text-sm text-blue-600"
  >
    {{ snippets }}
  </pre>
</template>
