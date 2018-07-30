<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name'=> 'Income'],
            ['name'=> 'Expense']
        ];

        \App\Models\Category::insert($data);
    }
}
