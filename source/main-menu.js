class MainMenu extends React.Component {
  constructor() {
    super();

    this.getInitialState = function(){
      return {
        mainMenuData = [
          {
            name: 'farm animals'
          },
          {
            name: 'jungle animals'
          },
          {
            name: 'disney characters'
          }
        ]
      }
    }
  }

  render() {
    return (
      {this.mainMenuData.map(
        function(menuItemObj){
          <h1>{ menuItemObj.name }</h1>
        })
      }
    );
  }
}

export { MainMenu };
