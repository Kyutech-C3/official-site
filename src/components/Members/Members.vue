<template>
  <div class="members">
    <SectionTitle>Members</SectionTitle>
    <div class="leader">
      <img class="leader_icon" src="../../assets/leader.png">
      <div class="leader_expression">
        <div class="leader_name">Syuman.K</div>
        <div>
          C3の部長をやっています。<br />
          3DとBlenderとエッチな女の子が大好きです。
        </div>
      </div>
    </div>
    <div class="exectives">
      <div class="exective">
        <img class="exective_icon" src="../../assets/saba.png">
        <div class="exective_expression">
          <div class="exective_name">Saba</div>
          <div>
            C3の副部長をやっています。<br />
            とくになにもかんがえていません。
          </div>
        </div>
      </div>
      <div class="exective">
        <img class="exective_icon" src="../../assets/saba.png">
        <div class="exective_expression">
          <div class="exective_name">Saba</div>
          <div>
            C3の副部長をやっています。<br />
            とくになにもかんがえていません。
          </div>
        </div>
      </div>
      <div class="exective">
        <img class="exective_icon" src="../../assets/saba.png">
        <div class="exective_expression">
          <div class="exective_name">Saba</div>
          <div>
            C3の副部長をやっています。<br />
            とくになにもかんがえていません。
          </div>
        </div>
      </div>
      <div class="exective">
        <img class="exective_icon" src="../../assets/saba.png">
        <div class="exective_expression">
          <div class="exective_name">Saba</div>
          <div>
            C3の副部長をやっています。<br />
            とくになにもかんがえていません。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '../miscs/SectionTitle'
export default {
  components: {
    SectionTitle
  }
}
</script>
<style lang="scss" scoped>
.members {
  padding: 2rem 15%;
  text-align: center;
  background-color: $base-color;
}
.leader{
  margin-bottom: 3rem;
  background-color: $brand-color;
  border-radius: $border-radius;
  padding: 2rem 0;
}
.leader_icon {
  display: inline-block;
  border-radius: 50%;
  width: 12rem;
  margin-right: 3rem;
  vertical-align: middle;
}
.leader_expression {
  display: inline-block;
  vertical-align: middle;
  text-align: left;
}
.leader_name {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  vertical-align: baseline;
}
.exective {
  display: inline-block;
  width: 9rem;
  margin: 0 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: $brand-color;
  border-radius: $border-radius;
}
.exective_expression {
  margin-top: 1rem;
}
.exective_icon {
  width: 100%;
  border-radius: 50%;
}
.exective_name {
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>