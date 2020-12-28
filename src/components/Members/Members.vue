<template>
  <div class="members">
    <SectionTitle>Members</SectionTitle>
    <div class="members_container">
      <div class="exective" :class="{leader: exective.isLeader}" v-for="exective in exectives" :key="exective.name">
        <!--<img class="exective_icon defaultShadow" :src="exective.avatar">-->
        <div class="exective_expression">
          <div class="exective_role">{{ exective.role }}</div>
          <div class="exective_name">{{ exective.name }}</div>
          <p>{{ exective.description }}</p>
        </div>
      </div>
    </div>
    <div class="etc">総部員数: 約70人</div>
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
        name: 'Savage',
        description: `C3で部長をやらせていただいておりますsavageです。unityで主に２Dゲームを作ったり、ノベルゲームを作っており、
        最近はシナリオを勉強しておりまする。「未来に残るアウトプット」をテーマに今年度頑張らせていただきます。
        ボドドドゥオー`
      },
      {
        isLeader: false,
        avatar: sabaAvatar,
        role: '副部長',
        name: 'セロリ',
        description: `C3で副部長をやっています。初音ミクさんが好きです。
        主に3DCGをやっており、モデリングにXISMO、アニメーションにMikuMikuDanceを使用しております。
        そろそろCinema 4Dも触りたいです。バーチャル美少女受肉もしました。最近は3DCGの原理的な部分を勉強してます。`
      },
      {
        isLeader: false,
        avatar: leaderAvatar,
        role: '副部長',
        name: 'Hayao',
        description: `C3の副部長を勤めさせていただいているHayaoです。いろんなことをやっています。最近はBot開発を行っています。`
      },
      {
        isLeader: false,
        avatar: leaderAvatar,
        role: '広報',
        name: 'ゆうき',
        description: `C3でゲームコミュニティのコミュニティリーダーをやっています。アクションゲームが好きで2D, 3D問わず制作してます！`
      },
      {
        isLeader: false,
        avatar: leaderAvatar,
        role: '外交担当/鯖缶',
        name: 'シモ',
        description: `外交担当とサバ缶を勤めていますシモです。
        まだ、初心者に毛が生えた程度ですがプログラミング関連をやっています。
        知識と技術を増やして、いろんなものを作りたいと思っています！最近はWebやってます。`
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
  align-items: top;
  justify-content: space-around;
}
.exective {
  flex-basis: 260px;
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
  width: 50%;
}
.leader .exective_icon {
  width: 200px;
}
.exective_name {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.etc {
  font-size: 1.5em;
  font-weight: bold;
}
</style>