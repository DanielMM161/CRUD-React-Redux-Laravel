<?php

use Illuminate\Database\Seeder;
use App\Clientes;

class ClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 50 product records
        for ($i = 0; $i < 25; $i++) {
            $now = new \DateTime();
            $now->format('d-m-Y');
            Clientes::create([
                'name' => $faker->firstName,
                'lastName' => $faker->lastName,
                'phone' => $faker->phoneNumber,
                'email' => $faker->unique()->safeEmail,
                'address' => "",
                'register' => $now,
                'dropOut' => null
            ]);
        }
    }
}
