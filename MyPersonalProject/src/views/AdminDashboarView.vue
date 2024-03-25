<script setup>

import AdminDashboard from '@/components/AdminDashboard.vue';
import { useActivityStore } from "@/stores/activity";
import { useRouter } from 'vue-router'
import AddButton from '../components/adminDashboard/AddButton.vue';

const router = useRouter()
const store = useActivityStore()

store.geActivities()

const deleteActivity = async (id) => {
    const isDeleted = await store.deleteActivity(id)

    if (isDeleted) {
        store.activities.pop()
    }

}

const editActivity = () => {
    router.push('/edit-activity')

  
}
</script>

<template>
    <AdminDashboard />
    <AddButton />
    <main>
    <v-container class="background d-flex justify-center rounded-lg">
        <v-table fixed-header="" height="500px" class="adminList">
            <thead>
                <tr>
                    <th class="text-left"> Id </th>
                    <th class="text-left"> Nombre </th>
                    <th class="text-left"> Lugar </th>
                    <th class="text-left"> Días </th>
                    <th class="text-left"> Mes </th>
                    <th class="text-left"> Hora </th>
                    <th class="text-left"> Rango </th>
                    <th class="text-left"> Aforo </th>
                    <th class="text-left"> Descripción </th>
                    <th class="text-left"> Opciones </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="activity in store.activities" :key="activity.id">
                    <td>{{ activity.id }}</td>
                    <td>{{ activity.name }}</td>
                    <td>{{ activity.location }}</td>
                    <td>{{ activity.days }}</td>
                    <td>{{ activity.month }}</td>
                    <td>{{ activity.time }}</td>
                    <td>{{ activity.range }}</td>
                    <td>{{ activity.capacity }}</td>
                    <td>{{ activity.description }}</td>
                    <td class="options-cell">
                        <v-row no-gutters class="btn-icono">
                            <v-col cols="6">
                                <i class="fa fa-edit" @click="editActivity(activity.id)"></i>
                            </v-col>
                            <v-col cols="6">
                                <i class="fa fa-trash" @click="deleteActivity(activity.id)"></i>
                            </v-col>
                        </v-row>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </v-container>
</main>
</template>

<style lang="scss" scoped>

main {
    background-color: #008299;
}

.background {
    background-color:#008299;
}

.text-left {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    justify-content: space-between;
}

td {
    padding: 10px;
    justify-content: space-between;
}

tr {
   height: 25px ;
}

.btn-icono {
    display: flex;
    justify-content: space-around;
    width: 100%;
}

@media (max-width: 600px) {
    .v-container {
        margin-left: 5vh;
    }
}

@media (min-width: 1200px) {
    .v-container {
        margin-left: 20vh;
    }
}
</style>