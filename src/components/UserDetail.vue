<template>
    <div class="user-detail">
        <div v-if="user" class="user-info">
            <h2>{{ user.name }}</h2>
            <h4>Основная информация</h4>
            <div class="user-row-info">
                <span>Псевдоним</span>
                <span>{{ user.username }}</span>
            </div>
            <div class="user-row-info">
                <span>Email</span>
                <span>{{ user.email }}</span>
            </div>
            <div class="user-row-info">
                <span>Телефон</span>
                <span>{{ user.phone }}</span>
            </div>
            <div class="user-row-info">
                <span>Вебсайт</span>
                <span>{{ user.website }}</span>
            </div>
            <h4>Адрес</h4>
            <div class="user-row-info">
                <span>Город</span>
                <span>{{ user.address.city}}</span>
            </div>
            <div class="user-row-info">
                <span>Улица</span>
                <span>{{ user.address.street}}</span>
            </div>
            <div class="user-row-info">
                <span>Улица</span>
                <span>{{ user.address.street}}</span>
            </div>
            <h4>Компания</h4>
            <div class="user-row-info">
                <span>Название</span>
                <span>{{ user.company.name}}</span>
            </div>
            <div class="user-row-info">
                <span>Направление</span>
                <span>{{ user.company.bs}}</span>
            </div>
        </div>
        <div v-else class="no-user">Выберите пользователя</div>
    </div>
</template>

<script lang="ts">
import store from '@/store';
import { User } from '@/types/main';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "UserDetail",
    computed: {
        user(): User {
            return store.state.user;
        }
    }
})
</script>

<style scoped lang="scss">
    .user {
        &-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-left: 80px;
        }
        &-row-info {
            width: 540px;
            display: flex;
            justify-content: space-between;
            min-height: 28px;
            align-items: center;
        }
    }
</style>