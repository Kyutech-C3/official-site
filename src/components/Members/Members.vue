<template>
  <div class="members">
    <SectionTitle>Members</SectionTitle>
    <div class="members_container">
      <div class="exective" :class="{leader: exective.isLeader}" v-for="exective in exectives" :key="exective.name">
        <img class="exective_icon defaultShadow" :src="exective.avatar">
        <div class="exective_expression">
          <div class="exective_role">{{ exective.role }}</div>
          <div class="exective_name">{{ exective.name }}</div>
          <p>{{ exective.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/*
部長
副部長x2
鯖缶
広報
*/
import SectionTitle from '../miscs/SectionTitle'
import leaderAvatar from '../../assets/leader.png'
import sabaAvatar from '../../assets/saba.png'
export default {
  components: {
    SectionTitle
  },
  data: () => ({
    exectives: [
      {
        isLeader: true,
        avatar: leaderAvatar,
        role: '部長',
        name: 'Syuman.K',
        description: 'C3の部長をやっています。\n3DとBlenderとエッチな女の子が大好きです。'
      },
      {
        isLeader: false,
        avatar: sabaAvatar,
        role: '副部長',
        name: 'Saba',
        description: 'C3の副部長をやっています。\n特に何もかんがえていません。'
      },
      {
        isLeader: false,
        avatar: leaderAvatar,
        role: '副部長',
        name: 'Saba',
        description: 'C3の副部長をやっています。\n特に何もかんがえていません。'
      },
      {
        isLeader: false,
        avatar: leaderAvatar,
        role: '副部長',
        name: 'Saba',
        description: 'C3の副部長をやっています。\n特に何もかんがえていません。'
      },
      {
        isLeader: false,
        avatar: leaderAvatar,
        role: '副部長',
        name: 'Saba',
        description: 'C3の副部長をやっています。\n特に何もかんがえていません。'
      },
    ]
  })
}
</script>
<style lang="scss" scoped>
.members {
  padding: 2rem 15%;
  text-align: center;
  background-color: $base-color;
}
.members_container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.exective {
  flex-basis: 160px;
  padding: 30px;
}
.leader {
  flex-basis: 100%;
}
.exective_role {
  font-weight: bold;
}
.exective_expression {
  margin-top: 1rem;
}
.exective_icon {
  border-radius: 50%;
  width: 100%;
}
.leader .exective_icon {
  width: 200px;
}
.exective_name {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>