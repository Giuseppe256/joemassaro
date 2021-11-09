<template>
    <div>
        <!-- <b-card class="footer">
            <v-footer class="v-footer"> -->
                <b-row align-v="center" class="footer">
                    <b-col align-self="center" class="footer-content">
                        {{ new Date().getFullYear() }} — <strong>Joe Massaro</strong>
                    </b-col>
                </b-row>
            <!-- </v-footer>
        </b-card> -->
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.card-body {
    padding-top: 0;
    padding-bottom: 0;
}
.footer {
    background-color: #242526;
    height: 60px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0;
}
.footer-content {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0;
}
</style>