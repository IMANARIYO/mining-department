import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ActiveUsersCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-sm font-semibold text-gray-800">
          ACTIVE USERS
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-center">
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span>LOGINS</span>
          <span className="font-bold text-gray-900">18</span>
        </div>
        <Separator />
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span>LOGGED OFF</span>
          <span className="font-bold text-gray-900">12</span>
        </div>
        <Separator />
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <span>PENDING</span>
          <span className="font-bold text-gray-900">4</span>
        </div>
      </CardContent>
    </Card>
  );
}
