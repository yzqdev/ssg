<script setup>
import SidenavItem from './Item.vue';
import Accordion from './accordion/Accordion.vue';

/* ICONS */
import EventsIcon from './icons/Events.vue';
import GuidesIcon from './icons/Guides.vue';
import MessagesIcon from './icons/Messages.vue';
import PicturesIcon from './icons/Pictures.vue';
import DocumentIcon from './icons/Documents.vue';
import StatisticsIcon from './icons/Statistics.vue';
</script>

<template>
  <div>
    <Accordion>
      <template #item>
        <DocumentIcon /> <span class="pl-3">Documents</span>
      </template>
      <template #panel>
        <SidenavItem title="Taxes" to="/documents/taxes" />
        <SidenavItem title="Travel" to="/documents/travel" />
        <SidenavItem title="Insurance" to="/documents/insurance" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <MessagesIcon /> <span class="pl-3">Messages</span>
      </template>
      <template #panel>
        <SidenavItem title="Unbox" to="/messages/unbox" />
        <SidenavItem title="Unread" to="/messages/unread" />
        <SidenavItem title="Archived" to="/messages/archived" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <PicturesIcon /> <span class="pl-3">Pictures</span>
      </template>
      <template #panel>
        <SidenavItem title="Vacations" to="/pictures/vacations" />
        <SidenavItem title="Anniversary" to="/pictures/anniversary" />
        <SidenavItem title="University" to="/pictures/university" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <StatisticsIcon /> <span class="pl-3">Statistics</span>
      </template>
      <template #panel>
        <SidenavItem title="Finances" to="/statistics/finances" />
        <SidenavItem title="Call Stats" to="/statistics/call-stats" />
        <SidenavItem title="Trip Logs" to="/statistics/trip-logs" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <EventsIcon /> <span class="pl-3">Events</span>
      </template>
      <template #panel>
        <SidenavItem title="Weddings" to="/events/weddings" />
        <SidenavItem title="Networking" to="/events/networking" />
      </template>
    </Accordion>

    <Accordion>
      <template #item>
        <GuidesIcon /> <span class="pl-3">Guides</span>
      </template>
      <template #panel>
        <SidenavItem title="Documentation" to="/guides/documentation" />
      </template>
    </Accordion>
  </div>
</template>
