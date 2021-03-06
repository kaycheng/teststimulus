import { Controller } from "stimulus"
import axios from "axios"

export default class extends Controller {
  static targets = [ "followButton" ]
  
  follow(event) {
    event.preventDefault()
    
    let user = this.followButtonTarget.dataset.user
    let button = this.followButtonTarget
    axios.post(`users/${user}/follow`)
         .then(function(response) {
           let status = response.data.status
           switch(status) {
             case 'Sign in first!':
               alert('You should sign in first!')
               break
             default:
               button.innerHTML = status
           }
         })
         .catch(function(error) {
           console.log(error)
         })
  }
}
