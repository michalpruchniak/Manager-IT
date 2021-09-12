<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class TasksTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_user_visit_home_route_has_200_status()
    {
        $user = User::find(1);
        $this->actingAs($user)
             ->get('/home')
             ->assertStatus(200);
    }
    
    public function test_guest_visit_home_route_is_redirected()
    {
        $this->get('/home')
             ->assertRedirect('/login');
    }

    public function test_api_all_tasks_return_200_status_for_guest()
    {
        $user = User::find(1);
        $this->actingAs($user)
             ->get('/api/taks/all-tasks')
             ->assertStatus(200);
    }

    public function test_api_all_task_redirect_guest()
    {
        $this->get('/api/taks/all-tasks')
             ->assertRedirect('/login');
    }
    
}
