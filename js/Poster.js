AFRAME.registerComponent("posters",{
    init:function(){
        this.createThumbnail(item)
    },
    createPosters:function(item){
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("visibile", true)
        entity_el.setAttribute("geometry",{
            primitive:"plane",
            width:20,
            height:28
        })
        entity_el.setAttribute("position",{ x: 0, y: 5, z: 0.1})
        entity_el.setAttribute("material", { src:item.url})
        
    },
    createBoundry:function(position,id){
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("id",id)
        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
        entity_el.setAttribute("position",position)
        entity_el.setAttribute("material",{color:"#00bcd4",opacity:1})
        return entity_el
          },
    createThumbnail:function(item){
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("geometry",{primitive:"circle",radius:9})
        entity_el.setAttribute("material",{src:item.url})
        return entity_el
        },
    createTitle:function(position, item){
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("text",{font:"exo2gold",align:"center",width:60,color:"#e65100",value:item.title})
        const el_pos = position
        el_pos.y=-20
        entity_el.setAttribute("position", el_pos)
        entity_el.setAttribute("visible",true)
        return entity_el  
      }

})