<?php

namespace App\Controller;

use App\Entity\Color;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ColorController extends AbstractController
{
   // Save color endpoint
    #[Route('/api/save-color', name: 'save_color', methods: ['POST'])]
    public function saveColor(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (
            !isset($data['name'], $data['red'], $data['green'], $data['blue']) ||
            !is_string($data['name']) ||
            !is_numeric($data['red']) ||
            !is_numeric($data['green']) ||
            !is_numeric($data['blue'])
        ) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        $color = new Color();
        $color->setName($data['name']);
        $color->setRed($data['red']);
        $color->setGreen($data['green']);
        $color->setBlue($data['blue']);
        $color->setCreatedAt(new \DateTimeImmutable());

        $em->persist($color);
        $em->flush();

        return $this->json(['message' => 'Color saved', 'id' => $color->getId()]);
    }

    // Delete color endpoint
    #[Route('/api/delete-color/{id}', name: 'delete_color', methods: ['DELETE'])]
    public function deleteColor(int $id, EntityManagerInterface $em): JsonResponse
    {
        $color = $em->getRepository(Color::class)->find($id);

        if (!$color) {
            return $this->json(['error' => 'Color not found'], 404);
        }

        $em->remove($color);
        $em->flush();

        return $this->json(['message' => 'Color deleted']);
    }

    // Get colors endpoint
    #[Route('/api/get-colors', name: 'get_colors', methods: ['GET'])]
    public function getColors(EntityManagerInterface $em): JsonResponse
    {
        $colors = $em->getRepository(Color::class)->findBy([], ['createdAt' => 'DESC']);

        $data = array_map(function (Color $color) {
            return [
                'id' => $color->getId(),
                'name' => $color->getName(),
                'red' => $color->getRed(),
                'green' => $color->getGreen(),
                'blue' => $color->getBlue(),
                'created_at' => $color->getCreatedAt()->format('Y-m-d H:i:s'),
            ];
        }, $colors);

        return $this->json($data);
    }

}
