<template lang="html">
  <main>
    <!-- Stats -->
    <stats :card="statsCard" @close="toggleStats(0)" v-if="stats.toggle"/>

    <help :help="help.content" @close="toggleHelp()" v-if="help.toggle"/>

    <!-- CMS -->
    <section v-if="!stats.toggle && !help.toggle" class="container">
      <icon @click.native="toggleHelp()" class="help-icon icon" scale='1.5' name='question'/>
      <header class="header">
         <h1 class="title">{{ title }}</h1>
      </header>
      <section class="profile">
         <section title="click to make a new list" class="list-card add-card">
            <h3>Create</h3>
            <div class="add-item" @click="toggleDialogue">
               <icon scale='4' name="plus"/>
            </div>
         </section>
         <dialogue v-if="modal"
            @discard="toggleDialogue"
            @commit="createNewCard" >
            <h3 slot="header">Create</h3>
            <a slot="footer" class="button--grey">
               <p>Save</p>
            </a>
         </dialogue>
         <list-card
         @delete="remove"
         @commit="commit(index, ...arguments)"
         @stats ="toggleStats(index)"
            v-for="(list, index) in lists"
            :list="list"
            :uid ="user"
            :key="list.id"
         />
      </section>
    </section>
  </main>
</template>

<script>

import ListCard from '~/components/ListCard'
import Dialogue from '~/components/Dialogue'
import Stats from '~/components/Stats'
import Help from '~/components/Help'
import profileHelp from '~/components/help/profile'

export default {
   components: { ListCard, Dialogue, Stats, Help },

   resource: 'App',

   data() {
      return {
         title: 'Lists',
         lists: [],
         user: this.$route.query.u,
         modal: false,
         stats: {
            toggle: false,
            index: 0
         },
         help: {
            toggle: false,
            content: profileHelp
         }
      }
   },

   computed: {
      statsCard() {
         return this.lists[this.stats.index].names
      }
   },

   methods: {
      remove(id) {
         /* first via id, if no id no fetch req'd */
         this.lists = this.lists.filter(item => item.id != id)
         if (id) {
            this.$getResource('delete', { uid: this.user, lid: id })
         }
      },

      toggleDialogue() {
         this.modal = !this.modal
      },

      toggleStats(index) {
         this.stats.index = index
         this.stats.toggle = !this.stats.toggle
      },

      toggleHelp() {
         this.help.toggle = !this.help.toggle
      },

      commit(index, list) {
         /* some sort of change has occured, reflect new state */
         list.id = this.lists.splice(index, 1)[0].id
         this.lists.push(list)
         console.log(list)
         this.$getResource('update', { uid: this.user, list })
         .then(res => console.log("Successfully update list"))
      },

      helptext() {
         // TODO change this to use swal
         alert("Make a list:   Click the big plus icon\n"+
               "Edit a list:   Click the pencil icon\n"+
               "Delete list:   Click the cross icon\n")
      },

      createNewCard(list) {

         /* fetch and add new id */
         if (list.title.length) {
            this.lists.push(list)
            this.$getResource('create', { uid: this.user, list })
            .then(res => {
               list.id = res.lid
               console.log("Successfully saved List:" + " " + res.lid)
            })
         }
         this.toggleDialogue()
      },


   },

   beforeMount() {
      if (!(this.$route.query.u &&
          this.$route.query.u.length === 24)) {
         this.$router.push('/')
      }

      this.$getResource('user', this.user)
         .then(data => {
            console.log(data)
            data.lists.forEach(
               list => this.lists.push(list))
         })
   }
}
</script>

<style lang='less' scoped>
@import '../assets/main';
@import '../assets/icons';

.container {
   width: 100%;
   margin: auto;
   flex-direction: row;
   flex-wrap: wrap;
   min-width: 350px;
}

.header {
   width: 100%;
   margin: 50px 50px 10px 50px;
   min-width: 150px;
}

.subtitle {
   margin: 50px 0px;
}

.add-card {
   flex-direction: column;
}

.add-item {
   padding: 60px 50px;
   border: 2px dashed #555;
   cursor: pointer;
   margin: auto;
   width: 80%;
   color: #35495e;
   display: flex;
   align-items: center;
   justify-content: center;
   svg {
      margin: auto;
   }
}

.add-item:hover {
   background-color: #35495e;
   color: #f5f5f5;
   border-color: #35495e;
}

.profile {
   width: 80%;
   margin: auto;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
}

@media screen and (max-width: 500px) {
   .profile {
      width: auto;
   }
}
</style>
