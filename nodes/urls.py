from django.urls import path

from nodes import views

urlpatterns = [
    path('', views.node_list, name='nodes'),
    path('store_feeds', views.store_feeds, name='store_feeds'),
    path('get_feeds/<int:node_id>', views.get_feeds, name='get_feeds'),
    path('crud/', views.CrudNodes.as_view()),
    path('delete_node/<int:node_id>', views.delete_node, name='delete_node'),
    path('get_chart/<int:node_id>', views.get_chart_data, name='get_chart'),

]
