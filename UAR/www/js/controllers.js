angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

//intro controller
.controller('IntroCtrl', ['$scope', '$state', '$ionicPopup', '$ionicSlideBoxDelegate', function($scope, $state, $ionicPopup, $ionicSlideBoxDelegate) {
    $scope.start = function() {
        $state.go('tab.dash');
    };


    $scope.$on('wizard:StepFailed', function(e, args) {
        if (args.index == 1) {
            $ionicPopup.alert({
                title: 'Empty field',
                template: 'Please enter a value!'
            }).then(function (res) {
                console.log('Field is empty');
            });
        }
    });

    // restart wizard from first slide
    $scope.$on('$ionicView.enter', function() {
      if ($ionicSlideBoxDelegate.currentIndex()>0) {
        $ionicSlideBoxDelegate.slide(0);
      }
    })

}])


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
